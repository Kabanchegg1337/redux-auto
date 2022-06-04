import React from 'react'
import styles from './Notifications.module.scss';


export default function Notification({text, role}) {
  return (
    <div className={styles.notification} role={role}>
        {text}
    </div>
  )
}
