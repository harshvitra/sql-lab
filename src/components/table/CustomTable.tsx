import React from 'react'
import Table from './Table'
import alasql from 'alasql'

interface Props {
  tableName: string;
}

export default function CustomTable({ tableName }: Props) {

  const [data, setData] = React.useState([]);
  const [columns, setColumns] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    // Fetching data from CSV
    alasql.promise(`SELECT * FROM CSV("/assets/csvfiles/${tableName}.csv", {headers:true})`)
      .then(function (data: any) {
        if (data) {
          setData(data)
          const keys = Object.keys(data[0]);
          const columnHeaders = keys.map(key => {
            return {
              accessorKey: key,
              header: key,
            };
          });
          setColumns(columnHeaders);
        }
      }).catch(function (err: any) {
        console.log('Error:', err);
      });

    return () => {
      // Reseting the data when unmounting
      setData([]);
      setColumns([])
    }
  }, [tableName])


  return data && data.length > 0 ? (
    <Table
      {...{
        data,
        columns,
      }}
    />
  ) : <p>Loading...</p>
}
