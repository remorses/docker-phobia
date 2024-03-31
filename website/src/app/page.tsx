// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { Chart } from 'website/src/app/chart'

const baseUrl = new URL('http://localhost:8080')
async function analyzeImage(image) {
    const response = await fetch(new URL('/analyze/' + image, baseUrl), {
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

export default async function Home() {
    const { tree } = await analyzeImage('postgres')
    
    return <Chart data={tree} />
}
