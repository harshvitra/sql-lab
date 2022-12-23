import React from 'react'
import styles from '../../../styles/Layout.module.scss'

type Props = {}

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
        <p>Made with love by Harsh, a data lover</p>
    </div>
  )
}

export default Footer