'use client'

import { scaleOrdinal } from '@visx/scale'

import { Group } from '@visx/group'
import { hierarchy, treemapBinary } from '@visx/hierarchy'
import { Text } from '@visx/text'
import { HierarchyNode, treemap as d3treemap } from 'd3-hierarchy'

import { useMemo, useState } from 'react'
import { scheme } from 'website/src/app/colors'
import { useWindowSize } from 'website/src/app/hooks'

const background = '#114b5f'

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 }

export type TreemapProps = {
    width: number
    height: number
    margin?: { top: number; right: number; bottom: number; left: number }
}

export function TreemapDemo({ data, layers, margin = defaultMargin }) {
    const { height, width } = useWindowSize()
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
            .paddingTop(20)

        return treemap(zoomedNode as any)
    }, [zoomedNode])

    const step = Math.ceil(scheme.length / layers.length)
    const colorScale = scaleOrdinal({
        domain: layers.map((l, i) => i),
        // skip some steps so scheme len is same as layers len

        range: scheme.filter((_, i) => i % step === 0),
    })

    const totalSize = zoomedNode?.value || 0
    return width < 10 ? null : (
        <div>
            <div>
                <svg width={width} height={height}>
                    <rect
                        width={width}
                        height={height}
                        rx={14}
                        fill={background}
                    />
                    <g>
                        {treemapElem

                            .descendants()

                            // .reverse()
                            // .filter((node) => node.data.value >= totalSize / 200)

                            .map((node, i) => {
                                const nodeWidth = node.x1 - node.x0
                                const nodeHeight = node.y1 - node.y0
                                // if (nodeWidth < 1 || nodeHeight < 1) {
                                //     return null
                                // }
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
                                        <rect
                                            width={nodeWidth}
                                            height={nodeHeight}
                                            stroke={'#000'}
                                            // opacity={d3
                                            //     .scaleLinear()
                                            //     .domain([0, 2, 6])
                                            //     .range([1, 1, 0])(node.depth)}
                                            strokeWidth={2}
                                            fill={colorScale(
                                                node.data.layer || 0,
                                            )}
                                        />
                                        {nodeWidth > 50 && nodeHeight > 9 && (
                                            <Text
                                                fill='#000'
                                                fontSize={9}
                                                dy={9}
                                                dx={4}
                                                // limit text visibility inside the rect
                                                width={nodeWidth}
                                                height={nodeHeight}
                                                textAnchor='start'
                                                verticalAnchor='start'
                                                pointerEvents='none'
                                                children={`${node.data.name} ${node.data.layer}`}
                                            />
                                        )}
                                    </Group>
                                )
                            })}
                    </g>
                </svg>
            </div>
        </div>
    )
}
