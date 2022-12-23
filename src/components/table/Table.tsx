import React from 'react'
import {
  Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table'
import styles from './../../../styles/Table.module.scss'
import Pagination from './Pagination'
import TableHead from './TableHead'

export default function Table({
  data,
  columns,
}: {
  data: any[]
  columns: ColumnDef<any>[]
}) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugAll: false,
  })

  return (
    <div>
      {/* Pagination */}
      <Pagination table={table} />

      <div className={styles.tableContainer}>

        {/* Table with all the data */}
        <table className={styles.table}>

          {/* Table Header */}
          <TableHead table={table} flexRender={flexRender} />

          {/* Table Body */}
          <tbody>
            {/* Fetching all the rows and mapping their cells */}
            {table.getRowModel()?.rows?.length > 0 && table.getRowModel().rows.map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
          {/* Table Body Ends here */}

        </table>
        {/* Table Ends here */}

      </div>

      {/* Pagination */}
      <Pagination table={table} />
    </div>
  )
}
