
// import { BarLoader } from 'react-spinners'
import BarLoader from 'react-spinners/BarLoader'
// console.log('BarLoader', BarLoader)

import { hierarchy } from 'd3-hierarchy'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useElemSize } from 'website/src/lib/hooks'
import { TreemapDemo } from 'website/src/lib/visx'
import { formatFileSize } from 'website/src/lib/utils'
import { useNavigate, useParams, useSearchParams } from '@remix-run/react'

async function analyzeImage({ image, port }) {
    const baseUrl = new URL('http://localhost:' + port)

    const u = new URL('/analyze/' + encodeURIComponent(image), baseUrl)

    console.log('fetching', u.toString())
    const response = await fetch(u, {
        method: 'POST',
    })
    if (!response.ok) {
        throw new Error(
            'Failed to analyze image ${response.status}: ' +
                (await response.text()),
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
            })
            setData({ tree, layers })
        }
        get().catch((e) => setError(e.message))
    }, [port, imageStr])
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
