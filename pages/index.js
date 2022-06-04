import Head from 'next/head'
import CarImage from '../components/carImage/CarImage'
import Header from '../components/header/Header'
import Notifications from '../components/notifications/Notifications'
import PartList from '../components/partList/PartList'
import Preloader from '../components/preloader/Preloader'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux auto</title>
        <meta name="description" content="For russianit.ru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Preloader />
      <Notifications />
      <Header />
      <CarImage />
      <PartList />
    </div>
  )
}
