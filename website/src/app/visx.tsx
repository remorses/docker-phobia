'use client'
import { Group } from '@visx/group'
import {
    Treemap,
    hierarchy,
    stratify,
    treemapSquarify,
    treemapBinary,
    treemapDice,
    treemapResquarify,
    treemapSlice,
    treemapSliceDice,
} from '@visx/hierarchy'
import { Text } from '@visx/text'
import {
    treemap as d3treemap,
    HierarchyRectangularNode,
    HierarchyNode,
} from 'd3-hierarchy'

import { TileMethod } from '@visx/hierarchy/lib/types'
import shakespeare, { Shakespeare } from '@visx/mock-data/lib/mocks/shakespeare'
import { scaleLinear } from '@visx/scale'
import { useState } from 'react'
import { useWindowSize } from 'website/src/app/hooks'

const color1 = '#f3e9d2'
const color2 = '#4281a4'
const background = '#114b5f'

const colorScale = scaleLinear<string>({
    domain: [0, Math.max(...shakespeare.map((d) => d.size ?? 0))],
    range: [color2, color1],
})

const data = stratify<Shakespeare>()
    .id((d) => d.id)
    .parentId((d) => d.parent)(shakespeare)
    .sum((d) => d.size ?? 0)

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 }

export type TreemapProps = {
    width: number
    height: number
    margin?: { top: number; right: number; bottom: number; left: number }
}

export function TreemapDemo({ margin = defaultMargin }: TreemapProps) {
    const { height, width } = useWindowSize()
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom
    const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0))

    const treemap = d3treemap()
        .tile(treemapBinary)
        .size([xMax, yMax])
        .padding(6)
        .paddingTop(20)

    const [zoomedNode, setZoomedNode] =
        useState<HierarchyRectangularNode<any> | null>(root)

    const treemapElem = treemap(zoomedNode as any)

    console.log(zoomedNode.depth, zoomedNode)
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
                    <Group>
                        {treemapElem

                            .descendants()
                            // .reverse()
                            .filter((node) => node.depth < zoomedNode.depth + 4)
                            .map((node, i) => {
                                const nodeWidth = node.x1 - node.x0
                                const nodeHeight = node.y1 - node.y0
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
                                            strokeWidth={2}
                                            fill={colorScale(node.value || 0)}
                                        />
                                        {nodeWidth > 50 && (
                                            <Text
                                                fill='#000'
                                                fontSize={9}
                                                dy={9 }
                                                dx={4}
                                                // limit text visibility inside the rect
                                                width={nodeWidth}
                                                textAnchor='start'
                                                verticalAnchor='start'
                                                pointerEvents='none'
                                            >
                                                {node.data.id}
                                            </Text>
                                        )}
                                    </Group>
                                )
                            })}
                    </Group>
                </svg>
            </div>
        </div>
    )
}
