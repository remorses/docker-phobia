'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { useEffect, useState } from 'react'
import TreeMap from 'react-d3-treemap'
import 'react-d3-treemap/dist/react.d3.treemap.css'



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
                levelsToDisplay={5}
                // valuePropInData='value'
                valueFn={(x) => formatFileSize(x)}
                namePropInData='path'
                valuePropInData='value'
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
