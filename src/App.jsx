import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Intro } from './components/Intro'

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
    </div>
  )
}