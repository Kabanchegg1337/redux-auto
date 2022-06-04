import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Preloader.module.scss'

export default function Preloader() {
    const status = useSelector(state => state.parts.status);
  return (
    <div className={styles.preloader} data-active={status === 'pending' ? true : false}>
        <div className={styles.icon}></div>
    </div>
  )
}
