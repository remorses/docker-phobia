'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { ResponsiveTreeMap } from '@nivo/treemap'
import useSWR from 'swr'
import { testData } from 'website/src/app/test-data'
import 'react-d3-treemap/dist/react.d3.treemap.css'
import TreeMap from 'react-d3-treemap'
import { useState, useEffect } from 'react'
import { Treemap } from 'website/src/app/treemap'

function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return size
}

export function Chart({ data }) {
    console.log('data', data)
    const { width, height } = useWindowSize()
    return (
        <div className='flex flex-col w-full h-screen grow'>
            <TreeMap
                height={height}
                width={width}
                data={data}
                // valueUnit={''}
                levelsToDisplay={3}
                // valuePropInData='value'
                valueFn={(x) => formatFileSize(x)}
                namePropInData='path'
                linkPropInData='path'
                childrenPropInData='children'
                colorModel={0}
                // disableBreadcrumb
            />
        </div>
    )
}

function formatFileSize(bytes) {
    console.log('bytes', bytes)
    if (bytes < 1024) {
        return bytes + ' bytes'
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / 1024 / 1024).toFixed(2) + ' MB'
    } else {
        return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB'
    }
}
