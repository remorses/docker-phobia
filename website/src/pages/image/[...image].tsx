'skip ssr'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import useSWR from 'swr'
import { Chart } from 'website/src/app/chart'
import { TreemapDemo } from 'website/src/app/visx'

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
    const { data } = useSWR(
        [image],
        async () => {
            const { tree, layers } = await analyzeImage(imageStr)
            return { tree, layers }
        },
        { },
    )
    if (!data || !image) {
        return <div>Loading...</div>
    }
    const { tree, layers } = data

    return (
        <Suspense>
            <div className='flex flex-col w-full'>
                <div className="h-[300px] w-full"></div>
                <TreemapDemo layers={layers} data={tree} />
            </div>
        </Suspense>
    )
}
