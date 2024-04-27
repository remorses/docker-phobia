'use client'
import { startTransition, useCallback } from 'react'

import { RectClipPath } from '@visx/clip-path'

import { scaleOrdinal } from '@visx/scale'

import { Group } from '@visx/group'
import { hierarchy, treemapBinary } from '@visx/hierarchy'
import { Text } from '@visx/text'
import { HierarchyNode, treemap as d3treemap } from 'd3-hierarchy'

import { useMemo, useRef, useState } from 'react'
import { scheme } from 'website/src/colors'
import {
    useElemSize,
    useSetFinishViewTransition,
    useWindowSize,
} from 'website/src/hooks'

const background = '#114b5f'

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 }

export type TreemapProps = {
    width: number
    height: number
    margin?: { top: number; right: number; bottom: number; left: number }
}

export function TreemapDemo({
    data,
    width,
    height,
    layers,
    margin = defaultMargin,
}) {
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    const [zoomedNode, setZoomedNode] = useState(() => {
        let i = 0
        let nodes = hierarchy(data)
            .sort((a, b) => (b.value || 0) - (a.value || 0))
            .sum((d) => d.value || 0)
            .each((x) => {
                i++
                x.data.id = i
                // return x
            })
        console.log('nodes', nodes)

        return nodes
    })

    const treemapElem = useMemo(() => {
        const treemap = d3treemap<any>()
            .tile(treemapBinary)
            .size([xMax, yMax])

            .padding(6)
            .paddingTop(26)

        return treemap(zoomedNode as any)
    }, [zoomedNode])

    const step = Math.ceil(scheme.length / layers.length)
    const colorScale = scaleOrdinal({
        domain: layers.map((l, i) => i),
        // skip some steps so scheme len is same as layers len

        range: scheme.filter((_, i) => i % step === 0),
    })

    const totalSize = zoomedNode?.value || 0

    const finishViewTransition = useSetFinishViewTransition()
    if (!width || !height) {
        return null
    }
    return width < 10 ? null : (
        <svg
            // style={{ viewTransitionName: `parent-svg` }}
            className='grow'
            width={width}
            height={height}
        >
            <rect width={width} height={height} rx={14} fill={background} />
            <g>
                {treemapElem.descendants().map((node, i) => {
                    const nodeWidth = node.x1 - node.x0
                    const nodeHeight = node.y1 - node.y0
                    const min = 2
                    if (
                        !nodeWidth ||
                        !nodeHeight ||
                        nodeWidth < min ||
                        nodeHeight < min
                    ) {
                        return null
                    }
                    // if (nodeWidth < 1 || nodeHeight < 1) {
                    //     return null
                    // }
                    const text = `${node.data.name} ${node.data.layer || ''}`
                    const showText = nodeWidth > 40 && nodeHeight > 14

                    return (
                        <Group
                            key={`node-${node.data.id}`}
                            style={{
                                viewTransitionName:
                                    node === zoomedNode ? 'full' : undefined,
                            }}
                            onClick={(e) => {
                                e.stopPropagation()
                                if (!('startViewTransition' in document)) {
                                    throw new Error(
                                        'startViewTransition is not supported',
                                    )
                                }
                                e.currentTarget.style.viewTransitionName =
                                    'full'
                                e.currentTarget.style.zIndex = '100'
                                // @ts-ignore
                                document.startViewTransition(
                                    () =>
                                        new Promise<void>((resolve) => {
                                            // copied from https://github.com/vercel/next.js/blob/66f8ffaa7a834f6591a12517618dce1fd69784f6/packages/next/src/client/link.tsx#L231-L233
                                            setZoomedNode(node.copy())
                                            finishViewTransition(() => () => {
                                                resolve()
                                                // e.currentTarget.style.viewTransitionName =
                                            })
                                        }),
                                )
                            }}
                            top={node.y0 + margin.top}
                            left={node.x0 + margin.left}
                        >
                            {showText && (
                                <RectClipPath
                                    id={`clip-${i}`}
                                    width={nodeWidth - 4}
                                    height={nodeHeight - 2}
                                    // strokeWidth={2}
                                />
                            )}
                            <rect
                                width={nodeWidth}
                                height={nodeHeight}
                                stroke={'#000'}
                                // opacity={d3
                                //     .scaleLinear()
                                //     .domain([0, 2, 6])
                                //     .range([1, 1, 0])(node.depth)}
                                strokeWidth={2}
                                fill={colorScale(node.data.layer || 0)}
                            />
                            {showText && (
                                <Text
                                    fill='#000'
                                    fontSize={13}
                                    fontWeight={600}
                                    clipPath={`url(#clip-${i})`}
                                    dy={9}
                                    dx={6}
                                    // limit text visibility inside the rect
                                    width={nodeWidth}
                                    height={nodeHeight}
                                    textAnchor='start'
                                    verticalAnchor='start'
                                    pointerEvents='none'
                                    children={text}
                                />
                            )}
                        </Group>
                    )
                })}
            </g>
        </svg>
    )
}
