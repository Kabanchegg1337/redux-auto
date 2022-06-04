import React from 'react'
import { useSelector } from 'react-redux';
import Notification from './Notification';
import styles from './Notifications.module.scss';

export default function Notifications() {
    const notifications = useSelector(state => state.notifications);
    const notification = useSelector(state => state.notifications)[notifications.length - 1];
    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
        setShow(true);
        const hideTimeout = setTimeout(() => {
            setShow(false)
        }, 2000);
        return () => {
            clearTimeout(hideTimeout);
        }   
    }, [notifications])
  return (
    <div className={styles.notifications_container} data-active={show}>
       {notification && <Notification text={notification.text} role='error' />}
    </div>
  )
}
