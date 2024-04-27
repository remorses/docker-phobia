'use client'
import {
    createContext,
    memo,
    startTransition,
    useCallback,
    useContext,
} from 'react'

import { RectClipPath } from '@visx/clip-path'

import { scaleOrdinal } from '@visx/scale'

import { Group } from '@visx/group'
import { hierarchy, treemapBinary } from '@visx/hierarchy'
import { Text } from '@visx/text'
import {
    HierarchyNode,
    HierarchyRectangularNode,
    treemap as d3treemap,
} from 'd3-hierarchy'

import { useMemo, useRef, useState } from 'react'
import { scheme } from 'website/src/colors'
import {
    useElemSize,
    useSetFinishViewTransition,
    useWindowSize,
} from 'website/src/hooks'
import { flushSync } from 'react-dom'

const background = '#114b5f'

const margin = { top: 10, left: 10, right: 10, bottom: 10 }

export type TreemapProps = {
    width: number
    height: number
    margin?: { top: number; right: number; bottom: number; left: number }
}

function contains(id, b: HierarchyNode<any>) {
    if (id === b.data.id) {
        return true
    }

    if (!b.parent) {
        return false
    }
    return contains(id, b.parent)
}

const context = createContext<{
    zoomedNode: HierarchyNode<any>
    setZoomedNode: (node: HierarchyNode<any>) => void
    colorScale: any
    justClickedNodeId: number
    setJustClickedNodeId: (id: number) => void
}>({} as any)

export function TreemapDemo({ data, width, height, layers }) {
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

    const [justClickedNodeId, setJustClickedNodeId] = useState<number>(0)

    const colorScale = scaleOrdinal({
        domain: layers.map((l, i) => i),
        // skip some steps so scheme len is same as layers len

        range: scheme.filter((_, i) => i % step === 0),
    })

    if (!width || !height) {
        return null
    }
    return width < 10 ? null : (
        <context.Provider
            value={{
                // @ts-ignore
                zoomedNode,
                setZoomedNode,
                colorScale,
                justClickedNodeId,
                setJustClickedNodeId,
            }}
        >
            <div
                className='grow'
                style={{
                    width,
                    height,
                    position: 'relative',
                }}
            >
                {/* <rect width={width} height={height} rx={14} fill={background} /> */}

                {treemapElem.descendants().map((node, i) => (
                    <MapNode key={`node-${node.data.id}`} node={node} i={i} />
                ))}
            </div>
        </context.Provider>
    )
}

const MapNode = memo(
    ({ node, i }: { node: HierarchyRectangularNode<any>; i: number }) => {
        const {
            justClickedNodeId,
            setZoomedNode,
            setJustClickedNodeId,
            colorScale,
        } = useContext(context)
        const nodeWidth = node.x1 - node.x0
        const nodeHeight = node.y1 - node.y0
        const min = 2
        if (!nodeWidth || !nodeHeight || nodeWidth < min || nodeHeight < min) {
            return null
        }
        // if (nodeWidth < 1 || nodeHeight <div 1) {
        //     return null
        // }
        const text = `${node.data.name} ${node.data.layer || ''}`
        const showText = nodeWidth > 40 && nodeHeight > 14

        return (
            <div
                key={`node-${node.data.id}`}
                style={{
                    position: 'absolute',
                    top: node.y0 + margin.top,
                    left: node.x0 + margin.left,
                    viewTransitionName: contains(justClickedNodeId, node)
                        ? `node-${node.data.id}`
                        : undefined,
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    if (!('startViewTransition' in document)) {
                        throw new Error('startViewTransition is not supported')
                    }

                    flushSync(() => {
                        setJustClickedNodeId(node.data.id)
                    })
                    // @ts-ignore
                    document.startViewTransition(
                        () =>
                            new Promise<void>((resolve) => {
                                // copied from https://github.com/vercel/next.js/blob/66f8ffaa7a834f6591a12517618dce1fd69784f6/packages/next/src/client/link.tsx#L231-L233

                                flushSync(() => {
                                    setZoomedNode(node.copy())
                                })

                                resolve()
                            }),
                    )
                }}
            >
                {showText && (
                    <RectClipPath
                        id={`clip-${i}`}
                        width={nodeWidth - 4}
                        height={nodeHeight - 2}
                        // strokeWidth={2}
                    />
                )}
                <div
                    style={{
                        width: nodeWidth,
                        height: nodeHeight,
                        stroke: '#000',
                        backgroundColor: colorScale(node.data.layer || 0),
                        // borderRadius: 4,
                        borderColor: '#000',
                        borderWidth: 2,
                    }}
                />
                {showText && (
                    <div
                        className='text-black text-sm absolute top-0 left-0'
                        style={{
                            clipPath: `url(#clip-${i})`,
                        }}
                        children={text}
                    />
                )}
            </div>
        )
    },
)
