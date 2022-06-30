import styles from './Intro.module.css'
import sushi from '../assets/sushi.png'
export function Intro(){
  return(
    <div className={styles.intro}>
      <div className={styles.content}>
        <h2>Comida Oriental</h2>
        <p>A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.</p>
        <a className={styles.button} href="">Cardápio</a>
      </div>
      <div className={styles.image}>
        <img src={sushi} alt="imagem sushi de ilustração" />
      </div>
    </div>

  )
}