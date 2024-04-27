'use client'
import { RectClipPath } from '@visx/clip-path'

import { scaleOrdinal } from '@visx/scale'

import { Group } from '@visx/group'
import { hierarchy, treemapBinary } from '@visx/hierarchy'
import { Text } from '@visx/text'
import { HierarchyNode, treemap as d3treemap } from 'd3-hierarchy'

import { useMemo, useRef, useState } from 'react'
import { scheme } from 'website/src/colors'
import { useElemSize, useWindowSize } from 'website/src/hooks'

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

    const [zoomedNode, setZoomedNode] = useState(() =>
        hierarchy(data)
            .sort((a, b) => (b.value || 0) - (a.value || 0))
            .sum((d) => d.value || 0),
    )

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

    if (!width || !height) {
        return null
    }
    return width < 10 ? null : (
        <svg className='grow' width={width} height={height}>
            <rect width={width} height={height} rx={14} fill={background} />
            <g>
                {treemapElem.descendants().map((node, i) => {
                    const nodeWidth = node.x1 - node.x0
                    const nodeHeight = node.y1 - node.y0
                    const min = 2
                    if (nodeWidth < min || nodeHeight < min) {
                        return null
                    }
                    // if (nodeWidth < 1 || nodeHeight < 1) {
                    //     return null
                    // }
                    const text = `${node.data.name} ${node.data.layer || ''}`
                    const showText = nodeWidth > 40 && nodeHeight > 14
                    

                    return (
                        <Group
                            key={`node-${i}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                setZoomedNode(node.copy())
                            }}
                            top={node.y0 + margin.top}
                            left={node.x0 + margin.left}
                        >
                            {showText && (
                                <RectClipPath
                                    id={`clip-${i}`}
                                    width={nodeWidth-4}
                                    height={nodeHeight-2}
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
