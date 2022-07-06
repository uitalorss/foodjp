import logo from '../assets/logo.svg'

import styles from './Footer.module.css'

export function Footer(){
  return(
    <footer className={styles.footer}>
      <img src={logo} alt="" />
      <div>
        <h2>Contato</h2>
        <span>+55 21 9999-9999</span>
        <span>email@gmail.com</span>
      </div>
      <div>
        <h2>Sobre nós</h2>
        <span>Menu</span>
        <span>Valores</span>
        <span>Pagina principal</span>
      </div>
      <div>
        <h2>Serviços</h2>
        <span>Entrega</span>
        <span>Retirada</span>
      </div>
    </footer>
  )
}