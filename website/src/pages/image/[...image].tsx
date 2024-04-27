'skip ssr'

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { useRouter } from 'next/router'
import { Suspense, useEffect, useRef, useState } from 'react'
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

    if (!data || !image) {
        return <div>Loading...</div>
    }
    const { tree, layers } = data

    return (
        <Suspense>
            <div className='flex h-full flex-col w-full'>
                <div className='h-[300px] w-full'></div>
                <PassComponentSize className='grow'>
                    {({ width, height }) => (
                        <TreemapDemo
                            width={width}
                            height={height}
                            layers={layers}
                            data={tree}
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
