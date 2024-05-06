'skip ssr'
import ClipLoader from 'react-spinners/BarLoader'

import { hierarchy } from 'd3-hierarchy'

import { useRouter } from 'next/router'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useElemSize } from 'website/src/hooks'
import { TreemapDemo } from 'website/src/visx'
import { formatFileSize } from 'website/src/utils'

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
    const router = useRouter()
    const image = router.query.image as string[]
    const port = (router.query.port as string) || '8080'
    let imageStr = image?.map((x) => decodeURIComponent(x)).join('/')
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
                <div>{error}</div>
            </div>
        )
    }
    if (!data || !image || !node) {
        return (
            <div className='flex h-full grow items-center justify-center flex-col gap-12 w-full'>
                <div>Loading Image</div>
                <ClipLoader width={140} color='#fff' />
            </div>
        )
    }
    return (
        <Suspense>
            <div className='flex h-full p-8 flex-col gap-6 w-full'>
                <div className='w-full flex text-sm flex-col gap-4 font-mono'>
                    <div className=''>Image: {imageStr}</div>

                    <div className=''>
                        Total Size: {formatFileSize(node.value)}
                    </div>
                    {
                        <button
                            style={
                                !!router.query.node
                                    ? {}
                                    : { opacity: 0, pointerEvents: 'none' }
                            }
                            onClick={() => {
                                router.back()
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
                <PassComponentSize className='grow'>
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
        return <div key='parent' ref={ref} {...rest} />
    }
    return (
        <div key='parent' ref={ref} {...rest}>
            {children({ width, height })}
        </div>
    )
}
