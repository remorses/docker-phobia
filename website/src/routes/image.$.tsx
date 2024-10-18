// import { BarLoader } from 'react-spinners'
import BarLoader from 'react-spinners/BarLoader'
// console.log('BarLoader', BarLoader)

import { hierarchy } from 'd3-hierarchy'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useElemSize } from 'website/src/lib/hooks'
import { TreemapDemo } from 'website/src/lib/visx'
import { formatFileSize } from 'website/src/lib/utils'
import { useNavigate, useParams, useSearchParams } from '@remix-run/react'

const fetchWithRetry = async (
    url: string,
    options: RequestInit,
    maxRetries = 3,
    delay = 1000,
) => {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                return response
            }
            if (!response.ok && i === maxRetries - 1) {
                const errorText = await response.text()
                throw new Error(
                    `Failed to fetch: ${response.status} - ${errorText}`,
                )
            }
        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error)
        }

        if (i < maxRetries - 1) {
            console.log(`Retrying in ${delay / 1000} seconds...`)
            await new Promise((resolve) => setTimeout(resolve, delay))
        }
    }

    throw new Error(`Failed to fetch after ${maxRetries} attempts`)
}

async function analyzeImage({ image, port, tunnelUrl }) {
    const baseUrl = tunnelUrl
        ? new URL(tunnelUrl)
        : new URL('http://localhost:' + port)

    if (tunnelUrl) {
        console.log('using url', baseUrl.toString())
    }
    const u = new URL('/analyze/' + encodeURIComponent(image), baseUrl)

    console.log('fetching', u.toString())
    const response = await fetchWithRetry(u.toString(), {
        method: 'POST',
    })
    if (!response.ok) {
        throw new Error(
            `Failed to analyze image ${response.status}: ${await response.text()}`,
        )
    }
    return response.json() as any as JsonOutput
}

interface JsonOutput {
    tree: ImageNode
    layers: { command: string }[]
}

interface ImageNode {
    size?: number
    name?: string
    data?: any
    children?: ImageNode[]
}

export default function Home({}) {
    const params = useParams()
    // console.log('params', params)
    const [searchParams] = useSearchParams()
    const imageStr = params['*'] as string
    const port = (searchParams.get('port') as string) || '8080'
    const tunnelUrl = searchParams.get('url') || ''

    const [error, setError] = useState<string>()
    const [data, setData] = useState<any>()
    useEffect(() => {
        const get = async () => {
            setError('')
            if (!imageStr) {
                return
            }
            const { tree, layers } = await analyzeImage({
                image: imageStr,
                port,
                tunnelUrl,
            })
            setData({ tree, layers })
        }
        get().catch((e) => setError(e.message))
    }, [port, tunnelUrl, imageStr])
    const navigate = useNavigate()
    const { tree, layers } = data || {}

    const node = useMemo(() => {
        if (!tree) {
            return null
        }
        let i = 0
        let node = hierarchy(tree)
            .sort((a, b) => (b.value || 0) - (a.value || 0))
            .sum((d) => d.value || 0)
            .each((x) => {
                i++
                x.data.id = i
                // return x
            })

        return node
    }, [tree])
    if (error) {
        return (
            <div className='flex text-red-300 h-full grow items-center justify-center flex-col gap-6 w-full'>
                <div>{String(error)}</div>
            </div>
        )
    }

    if (!data || !imageStr || !node) {
        return (
            <div className='flex h-full grow items-center justify-center flex-col gap-12 w-full'>
                <div>Loading Image</div>
                <BarLoader width={140} color='#fff' />
            </div>
        )
    }
    return (
        <Suspense>
            <div className='flex h-full grow p-8 flex-col gap-6 w-full'>
                <div className='w-full flex text-sm flex-col gap-4 font-mono'>
                    <div className=''>Image: {imageStr}</div>

                    <div className=''>
                        Total Size: {formatFileSize(node.value)}
                    </div>
                    {
                        <button
                            style={
                                !!searchParams.get('node')
                                    ? {}
                                    : { opacity: 0, pointerEvents: 'none' }
                            }
                            onClick={() => {
                                navigate(-1)
                                // startViewTransition(() => {
                                //     flushSync(() => {
                                //         router.back()
                                //     })
                                // })
                            }}
                            className='w-fit'
                        >
                            Back
                        </button>
                    }
                </div>
                <PassComponentSize className='grow flex flex-col'>
                    {({ width, height }) => (
                        <TreemapDemo
                            width={width}
                            height={height}
                            layers={layers}
                            node={node}
                        />
                    )}
                </PassComponentSize>
            </div>
        </Suspense>
    )
}

function PassComponentSize({ children, ...rest }) {
    const ref = useRef<HTMLDivElement>(null)
    const { width, height } = useElemSize(ref)
    if (!width || !height) {
        console.log('passcomponentsize', width, height)
        return <div key='parent' ref={ref} {...rest} />
    }
    return (
        <div key='parent' ref={ref} {...rest}>
            {children({ width, height })}
        </div>
    )
}
