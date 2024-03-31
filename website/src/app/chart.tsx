'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/treemap
import { ResponsiveTreeMap } from '@nivo/treemap'
import useSWR from 'swr'
import { testData } from 'website/src/app/test-data'

export function Chart({ data }) {
    console.log('data',data)
    return (
        <div className='flex flex-col w-full h-screen grow'>
            <ResponsiveTreeMap
                data={data}
                identity='path'
                value='size'
                label={'name'}

                animate={false}
                // valueFormat='.02s'
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                labelSkipSize={12}
                // labelTextColor={{
                //     from: 'color',
                //     modifiers: [['darker', 1.2]],
                // }}
                parentLabelPosition='left'
                // parentLabelTextColor={{
                //     from: 'color',
                //     modifiers: [['darker', 2]],
                // }}
                // borderColor={{
                //     from: 'color',
                //     modifiers: [['darker', 0.1]],
                // }}
            />
        </div>
    )
}
