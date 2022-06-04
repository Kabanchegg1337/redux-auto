import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.back}></div>
        <div className={styles.info}>
            <h1 className={styles.title}>Повреждения</h1>
            <h2 className={styles.subtitle}>Участник "А" VW Polo</h2>
        </div>
        <div className={styles.icon}></div>
    </header>
  )
}
