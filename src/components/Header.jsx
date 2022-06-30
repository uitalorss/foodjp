import styles from './Header.module.css'
import logo from '../assets/logo.svg'
export function Header(){
  return(
    <div className={styles.header}>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a className={styles.itemNav} href="">Início</a> 
        </li>
        <li>
          <a className={styles.itemNav} href="">Cardápio</a>
        </li>
        <li>
          <a className={styles.itemNav} href="">Sobre</a> 
        </li>
      </ul>
      <a className={styles.button} href="">Entrar</a>
    </div>
  )
}