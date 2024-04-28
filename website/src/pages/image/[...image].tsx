'skip ssr'

import { hierarchy } from 'd3-hierarchy'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { useRouter } from 'next/router'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import useSWR from 'swr'
import { Chart } from 'website/src/chart'
import { useElemSize } from 'website/src/hooks'
import { TreemapDemo } from 'website/src/visx'

const baseUrl = new URL('http://localhost:8080')
async function analyzeImage(image) {
    const u = new URL('/analyze/' + encodeURIComponent(image), baseUrl)
    console.log('fetching', u.toString())
    const response = await fetch(u, {
        method: 'POST',
    })
    if (!response.ok) {
        throw new Error('Failed to analyze image: ' + (await response.text()))
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
    console.log('image', router.query)

    let imageStr = image?.map((x) => decodeURIComponent(x)).join('/')
    const [data, setData] = useState<any>()
    useEffect(() => {
        const get = async () => {
            if (!imageStr) {
                return
            }
            const { tree, layers } = await analyzeImage(imageStr)
            return setData({ tree, layers })
        }
        get()
    }, [imageStr])

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
    if (!data || !image || !node) {
        return (
            <div className='flex h-full grow items-center justify-center flex-col gap-6 w-full'>
                <div>Loading image...</div>
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

function formatFileSize(bytes) {
    console.log('bytes', bytes)
    if (bytes < 1024) {
        return bytes + ' bytes'
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / 1024 / 1024).toFixed(2) + ' MB'
    } else {
        return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB'
    }
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
