import { Table as ReactTable, Renderable } from '@tanstack/react-table'
import React from 'react'

type Props = {
    table: ReactTable<any>;
    flexRender: <TProps extends object>(Comp: Renderable<TProps>, props: TProps) => React.ReactNode | JSX.Element;
}

function TableHead({ table, flexRender }: Props) {
    return (
        <thead>
            {/* Header of the Table */}
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => {
                        return (
                            <th key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder ? null : (
                                    <div>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </div>
                                )}
                            </th>
                        )
                    })}
                </tr>
            ))}
        </thead>
    )
}

export default TableHead