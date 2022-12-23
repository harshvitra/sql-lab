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

export function getTableName(query: string): string {
    for (const q of queries) {
        if (q.query === query) {
            return q.table;
        }
    }

    return '';
}