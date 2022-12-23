import Head from 'next/head'
import React, { Suspense } from 'react'
import styles from '../styles/Home.module.scss'
import dynamic from 'next/dynamic'
import CustomTable from '../src/components/table/CustomTable'

const SQLEditor = dynamic(
  () => import("../src/components/SQLEditor"),
  { ssr: false }
)

export default function Home() {
  const [query, setQuery] = React.useState("");
  const [tableName, setTableName] = React.useState("");
  
  return (
    <>
      <Head>
        <title>Atlan | SQL Data Lab</title>
        <meta name="description" content="Atlan | SQL Data Lab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Welcome to SQL Data Lab, data made accessible.</p>
        <Suspense fallback={<p>Loading...</p>}>
          <SQLEditor query={query} setQuery={setQuery} tableName={tableName} setTableName={setTableName} />
          {tableName && <CustomTable tableName={tableName} />}
        </Suspense>
      </main>
    </>
  )
}
