import React from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components'
import { TableData, TableDatum } from './types'

interface Props {
    className?: string
    data: TableData
}

const Table: React.FunctionComponent<Props> = ({ className, data: rawData }) => {
    if (rawData.length === 0) {
        throw new Error(`data empty`)
    }

    const data = React.useMemo(
        () => rawData,
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'All',
                columns: Object.keys(rawData[0].columns).map(columnName => ({
                    Header: columnName,
                    accessor: (row: TableDatum) => row.columns[columnName], // accessor is the "key" in the data
                }))
                // [
                //     {
                //         Header: 'Column 1',
                //         accessor: 'col1', // accessor is the "key" in the data
                //     },
                //     {
                //         Header: 'Column 2',
                //         accessor: 'col2',
                //     },
                // ],
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
      
    return (
        <table {...getTableProps()}>
        <thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <th {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default styled(Table)`
    padding: 1em;
    border: solid 1px black;
    display: inline-block;
    cursor: pointer;
`
