import React from 'react'
import {
    Table as ReactTable,
} from '@tanstack/react-table'
import styles from './../../../styles/Table.module.scss'

type Props = {
    table: ReactTable<any>
}

function Pagination({ table }: Props) {
    return (
        <div className={styles.paginationContainer}>

            {/* Button to go to the first page */}
            <button
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
            >
                First
            </button>

             {/* Button to go to the previous page */}
            <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Prev
            </button>

             {/* Button to go to the next page */}
            <button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </button>

             {/* Button to go to the last page */}
            <button
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
            >
                Last
            </button>

            {/* Info about the active page */}
            <span>
                Showing Page {" "}
                <strong>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </strong>
            </span>

            {/* Jump to a different page */}
            <span>
                Go to page:
                <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        table.setPageIndex(page)
                    }}
                />
            </span>

            {/* Select the number of items to show on a page */}
            <select
                value={table.getState().pagination.pageSize}
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}
            >
                {[10, 20, 30, 40, 50, 100].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Pagination