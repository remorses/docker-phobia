// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
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
}

interface ImageNode {
    size?: number
    name?: string
    data?: any
    children?: ImageNode[]
}

export default async function Home({ params: { image } }) {
    let imageStr = image.map((x) => decodeURIComponent(x)).join('/')
    console.log('image', imageStr)
    const { tree } = await analyzeImage(imageStr)

    return <TreemapDemo data={tree} />
}
