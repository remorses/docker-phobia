// import { BarLoader } from 'react-spinners'
import BarLoader from 'react-spinners/BarLoader'
// console.log('BarLoader', BarLoader)

import { hierarchy } from 'd3-hierarchy'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useElemSize } from 'website/src/lib/hooks'
import { TreemapDemo } from 'website/src/lib/visx'
import { formatFileSize } from 'website/src/lib/utils'
import {
    useLoaderData,
    useNavigate,
    useParams,
    useSearchParams,
} from '@remix-run/react'
import { LoaderFunctionArgs } from '@remix-run/node'

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

export function loader({ params, request, context }: LoaderFunctionArgs) {
    const imageString = params['*'] as string
    if (!imageString) {
        return new Response('No image specified', { status: 400 })
    }
}

export default function Home({}) {
    const params = useParams()
    // console.log('params', params)
    const [searchParams] = useSearchParams()
    const imageStr = params['*'] as string

    const navigate = useNavigate()
    const { tree, layers } = useLoaderData() as JsonOutput

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
