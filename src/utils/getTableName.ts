// Array of default queries
export const queries = [
    {
        query: "Select any query",
        table: ''
    },
    {
        query: "select * from orders",
        table: 'orders'
    },
    {
        query: "select * from customers",
        table: 'customers'
    },
    {
        query: "select * from employees",
        table: 'employees'
    },
    {
        query: "select * from largeSentimentData",
        table: 'largeSentimentData'
    },
];

/**
 * Returns the table name for a given query.
 * @param query - The query to find the corresponding table name for.
 * @returns The table name for the given query. If no match is found, an empty string is returned.
 */

export function getTableName(query: string): string {
    for (const q of queries) {
        if (q.query === query) {
            return q.table;
        }
    }
    return '';
}