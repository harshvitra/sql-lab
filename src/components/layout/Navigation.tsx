import React from 'react'
import styles from '../../../styles/Home.module.scss'

type Props = {}

function Navigation({}: Props) {
  return (
    <div className={styles.navbar}>
        <h3>Atlan - SQL Data Lab</h3>
    </div>
  )
}

export default Navigation