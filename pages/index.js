import Head from 'next/head'
import CarImage from '../components/carImage/CarImage'
import Header from '../components/header/Header'
import Notifications from '../components/notifications/Notifications'
import PartList from '../components/partList/PartList'
import Preloader from '../components/preloader/Preloader'
import styles from '../styles/Home.module.scss'

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
      <main>
        <CarImage />
        <PartList />
        <a className={styles.button} href='#'>Следующий шаг</a>
      </main>
    </div>
  )
}
