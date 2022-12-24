import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";
import styles from '../../../styles/Home.module.scss';
import { getTableName, queries } from '../../utils/getTableName';

type Props = {
  setTableName: (value: string) => void;
  tableName: string;
}

function SQLEditor({ setTableName, tableName }: Props) {

  const [error, setError] = React.useState('');

  const [query, setQuery] = React.useState("");

  const updateQuery = (query: string) => {
    // If the query is valid i.e. can return a table name, we set the table name and the query
    // Else we set error and ask user to enter valid query
    if (getTableName(query)) {
      setTableName(getTableName(query))
      setQuery(query)
      setError('')
    } else {
      setError('Please enter valid query')
      setTableName('')
    }
  }
  
  return (
    <div>
      {/* Select a query from a list of pre-defined queries */}
      <select
        className={styles.querySelector}
        value={query}
        onChange={e => {
          setQuery('')
          updateQuery(e.target.value)
        }}
      >
        {queries.map(query => (
          <option key={query.table} value={query.query}>
            {query.query}
          </option>
        ))}
      </select>

      {/* Editor to add SQL query */}
      <label htmlFor='editor'></label>
      <AceEditor
        aria-label="editor"
        mode="mysql"
        theme="twilight"
        name="editor"
        fontSize={16}
        minLines={4}
        maxLines={15}
        width="100%"
        showPrintMargin={false}
        showGutter
        placeholder="Write your Query here..."
        editorProps={{ $blockScrolling: true }}
        focus
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={query}
        onChange={(newvalue) => {
          setError('')
          setQuery(newvalue)
          if (newvalue === '') {
            setTableName('')
          }
        }}
      />

      <div className={styles.buttonContainer}>
        {/* Button to run the typed query */}
        {query && (
          <div>
            <button onClick={() => {
              updateQuery(query)
            }} className={styles.button}>
              Run Query
            </button>
            {error && <p className={styles.errorText}>{error}</p>}
          </div>
        )}

        {/* Button to reset the query and the table */}
        {query && tableName && 
          (<button onClick={() => {
            setQuery('')
            setTableName('')
          }} className={styles.buttonSecondary}>
            Reset
          </button>)
        }
      </div>
    </div>
  )
}

export default SQLEditor