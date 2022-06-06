import Image from 'next/image'
import React from 'react'
import styles from './Header.module.scss'
import back from '../../public/back.svg'
import map from '../../public/map.svg'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.back}>
          <Image src={back} fill="true" width="100%" height="100%" />
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}>Повреждения</h1>
            <h2 className={styles.subtitle}>Участник "А" VW Polo</h2>
        </div>
        <div className={styles.map}>
          <Image src={map} fill="true" width="100%" height="100%" />
        </div>
    </header>
  )
}
