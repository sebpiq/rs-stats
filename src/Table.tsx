import groupBy from 'lodash.groupby'
import maxBy from 'lodash.maxby'
import minBy from 'lodash.minby'
import React from 'react'
import { useTable } from 'react-table'
import * as d3Scale from 'd3-scale'
import styled from 'styled-components'
import { AggregatedValue, ColumnValue, TableData, TableDatum } from './types'

interface Props {
    className?: string
    data: TableData
}

const DAYS_LABELS_FR = {
    0: 'Lundi',
    1: 'Mardi',
    2: 'Mercredi',
    3: 'Jeudi',
    4: 'Vendredi',
    5: 'Samedi',
    6: 'Dimanche',
}

const formatNumber = (value: number) => Math.round(value).toString(10)

const findValue = (data: TableData, colKey: ColumnValue, rowKey: ColumnValue) => {
    const results = data.filter(datum => 
        datum.columns['day'] === colKey 
            && datum.columns['hour'] === rowKey)
    if (results.length !== 1) {
        return {value: 0, columns: {day: colKey, hour: rowKey}}
        // throw new Error(`datum with (day=${colKey}, hour=${rowKey}) not found`)
    }
    return results[0]
}

const Table: React.FunctionComponent<Props> = ({ className, data: rawData }) => {
    if (rawData.length === 0) {
        throw new Error(`data empty`)
    }
      
    const columns = groupBy(rawData, (datum) => datum.columns['day'])
    const columnKeys = Object.keys(columns).map(v => parseInt(v, 10))
    const rows = groupBy(rawData, (datum) => datum.columns['hour'])
    const rowKeys = Object.keys(rows).map(v => parseInt(v, 10))
    columnKeys.sort((a, b) => a - b)
    rowKeys.sort((a, b) => a - b)
    console.log(columns, rows, columnKeys, rowKeys)

    const scaleValue = d3Scale.scaleLinear().domain([
        minBy(rawData, datum => datum.value)!.value as number,
        maxBy(rawData, datum => datum.value)!.value as number,
    ]).range([0, 1])

    return (
        <table>
        <thead>
            <tr>
                <th></th>
                {columnKeys.map(colName => (
                    <th>{(DAYS_LABELS_FR as any)[colName.toString(10)]}</th>
                ))}
            </tr>
        </thead>
        <tbody>

            {rowKeys.map(rowKey => (
                <tr>
                    <th>
                        {rowKey}
                    </th>
                    {columnKeys.map(colKey => {
                        const value = findValue(rawData, colKey, rowKey).value as number
                        return (
                            <ValueTd ratio={scaleValue(value)}>
                                {formatNumber(value)}
                            </ValueTd>
                        )
                    })}
                </tr>
            ))}

        </tbody>
      </table>
    )
}

const ValueTd = styled.td<{ratio: number}>`
    padding: 2em;
    background: ${props => `rgba(0, 255, 0, ${props.ratio})`}
`

export default styled(Table)`
    padding: 1em;
    border: solid 1px black;
    display: inline-block;
    cursor: pointer;
`
