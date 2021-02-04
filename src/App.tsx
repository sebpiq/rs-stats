import groupBy from 'lodash.groupby'
import React, { useState } from 'react'
import FileLoader from './FileLoader'
import Table from './Table'
import { AggregatedValue, FbStatData, FbStatDatumNumberFields, TableData } from './types'

const makeAggregationAvg = (fieldName: FbStatDatumNumberFields) => 
    (data: FbStatData) => data.reduce((total, datum) => total + datum[fieldName], 0) / data.length

const groupByPublicationTime = (data: FbStatData, aggregation: (data: FbStatData) => AggregatedValue) => {
    const aggregatedData: TableData = []
    const groupedByDay = groupBy(data, (datum) => datum.Publié.getDay())
    Object.entries(groupedByDay).forEach(([day, dayGroup]) => {
        const groupedByHour = groupBy(dayGroup, (datum) => datum.Publié.getHours())
        Object.entries(groupedByHour).forEach(([hour, hourGroup]) => {
            aggregatedData.push({
                value: aggregation(hourGroup),
                columns: {hour: parseInt(hour, 10), day: parseInt(day, 10)}
            })
        })
    })
    return aggregatedData
}

function App() {
    const [tableData, setTableData] = useState<TableData | null>(null)
    const onLoad = (data: FbStatData) => {
        setTableData(groupByPublicationTime(
            data, 
            makeAggregationAvg('Lifetime Post Total Reach')
        ))
    }
    console.log(tableData)
    return (
        <div className="App">
            {!tableData ? <FileLoader onLoad={onLoad} />: null}
            {tableData ? 
                (   
                    <>
                        <h2>Lifetime Post Total Reach</h2>
                        <Table data={tableData} />
                    </>
                )
            : null}
        </div>
    )
}

export default App
