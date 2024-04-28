'use client'
import Tippy from '@tippyjs/react/headless'

import { colord } from 'colord'

import {
    createContext,
    memo,
    startTransition,
    useCallback,
    useContext,
    useEffect,
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
    startViewTransition,
    useElemSize,
    useSetFinishViewTransition,
    useWindowSize,
} from 'website/src/hooks'
import { flushSync } from 'react-dom'
import { useRouter } from 'next/router'

const background = '#114b5f'

const margin = { top: 0, left: 0, right: 0, bottom: 0 }

export type TreemapProps = {
    width: number
    height: number
    margin?: { top: number; right: number; bottom: number; left: number }
}

function contains(id, b: HierarchyNode<any>, level = 2) {
    if (!level) {
        return false
    }
    if (id === b.data.id) {
        return true
    }

    if (!b.parent) {
        return false
    }
    return contains(id, b.parent, level - 1)
}
const white = '#fff'
const black = '#444'
const context = createContext<{
    zoomedNode: HierarchyNode<any>
    setZoomedNode: (node: HierarchyNode<any>) => void
    colorScale: any
    layers: any[]
    justClickedNodeId: number
    setJustClickedNodeId: (id: number) => void
}>({} as any)

export function TreemapDemo({
    node,
    width,
    height,
    layers,
}: {
    node: HierarchyNode<any>
    width: number
    height: number
    layers: any[]
}) {
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom
    const router = useRouter()
    const [zoomedNode, setZoomedNode] = useState(node)

    useEffect(() => {
        if (!router.query.node) {
            setZoomedNode(node)
            return
        }
        const nodeId = Number(router.query.node)
        if (!nodeId) {
            return
        }
        const found = node.descendants().find((n) => n.data.id === nodeId)
        if (!found) {
            return
        }
        setZoomedNode(found.copy())
    }, [node, router.query.node])

    const treemapElem = useMemo(() => {
        const treemap = d3treemap<any>()
            .tile(treemapBinary)
            .size([xMax, yMax])

            .padding(7)
            .paddingTop(26)

        return treemap(zoomedNode as any)
    }, [zoomedNode])

    const step = Math.ceil(scheme.length / layers.length)

    const [justClickedNodeId, setJustClickedNodeId] = useState<number>(-1)

    const colorScale = useMemo(
        () =>
            scaleOrdinal({
                domain: layers.map((l, i) => i),
                // skip some steps so scheme len is same as layers len

                range: scheme.filter((_, i) => i % step === 0),
            }),
        [],
    )

    if (!width || !height) {
        return null
    }
    return width < 10 ? null : (
        <context.Provider
            value={{
                // @ts-ignore
                zoomedNode,
                layers,
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
            layers,
            setJustClickedNodeId,
            colorScale,
        } = useContext(context)
        const nodeWidth = node.x1 - node.x0
        const nodeHeight = node.y1 - node.y0
        const min = 2
        const router = useRouter()
        const onClick = useCallback(
            (e) => {
                e.stopPropagation()

                flushSync(() => {
                    setJustClickedNodeId(node.data.id)
                })

                startViewTransition(() => {
                    flushSync(() => {
                        router.push(
                            {
                                query: {
                                    ...router.query,
                                    node: node.data.id,
                                },
                            },
                            undefined,
                            { shallow: true },
                        )
                        // setZoomedNode(node.copy())
                    })
                })
            },
            [node, router.query],
        )

        // if (nodeWidth < 1 || nodeHeight <div 1) {
        //     return null
        // }
        const text = `${node.data.name}`
        const showText = nodeWidth > 40 && nodeHeight > 14

        const backgroundColor = colorScale(node.data.layer || 0)

        const textColor = useMemo(() => {
            const color = colord(backgroundColor)
            if (color.isLight()) {
                return black
            }
            return white
        }, [backgroundColor])

        const borderColor = useMemo(() => {
            const backgroundColorOut = colorScale(node.parent?.data?.layer || 0)
            const color = colord(backgroundColorOut)
            if (color.isLight()) {
                return black
            }
            if (textColor === white) {
                return white
            }
        }, [textColor])
        if (!nodeWidth || !nodeHeight || nodeWidth < min || nodeHeight < min) {
            return null
        }

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
                className='cursor-pointer'
                onClick={onClick}
            >
                <div
                    style={{
                        width: nodeWidth,
                        height: nodeHeight,
                        stroke: black,
                        backgroundColor,
                        // borderRadius: 4,
                        borderColor,
                        borderWidth: 2,
                    }}
                />
                {showText && (
                    <Tippy
                        render={(attrs) => {
                            const layer = layers.find(
                                (l, i) => i === node.data.layer,
                            )
                            return (
                                <div
                                    {...attrs}
                                    className='text-white text-xs flex flex-col gap-1 font-mono max-w-[800px] rounded p-2 bg-black'
                                >
                                    <div className=''>
                                        path: {nodeToPath(node)}
                                    </div>
                                    <div className='truncate'>
                                        layer: {layer?.command}
                                    </div>
                                </div>
                            )
                        }}
                    >
                        <div
                            className='text-black treemap-text truncate text-sm absolute top-[1px] left-1'
                            style={{
                                maxWidth: nodeWidth - 4,
                                maxHeight: nodeHeight - 4,
                                color: textColor,
                            }}
                            data-tippy-content={text}
                            children={text}
                        />
                    </Tippy>
                )}
            </div>
        )
    },
)

function nodeToPath(node: HierarchyNode<any>) {
    const path = []
    let current = node
    while (current) {
        path.push(current!.data.name)
        current = current.parent!
    }
    return path.reverse().join('/')
}
