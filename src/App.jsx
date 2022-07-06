import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}