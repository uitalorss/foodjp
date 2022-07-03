import styles from './Intro.module.css';
import sushi from '../assets/sushi.png';
import prato from '../assets/img-prato.png';
import recipe1 from '../assets/prato-1.png'
import recipe2 from '../assets/prato-2.png'
import recipe3 from '../assets/prato-3.png'
import { Recipes } from './Recipes';
export function Intro(){
  const recipes = [
    {
      name: 'Ramen de Frango',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      value: 30,
      image: recipe1
    },
    {
      name: 'Ramen Apimentado',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      value: 30,
      image: recipe2
    },
    {
      name: 'Ramen Tradicional',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      value: 30,
      image: recipe3
    }
  ]

  return(
    <>
    <div className={styles.intro}>
      <div className={styles.content}>
        <h2>Comida Oriental</h2>
        <p>A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.</p>
        <a className={styles.button} href="">Cardápio</a>
      </div>
      <div className={styles.image}>
        <img src={sushi} alt="imagem sushi de ilustração" />
      </div>
      <div className={styles}>
        <img src={prato} alt="imagem sushi de ilustração" />
      </div>
      <div className={styles.content}>
        <h2>Feita de forma Tradicional</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a className={styles.link} href="">Ler mais sobre o modo de preparo </a>
      </div>
    </div>
    <div className={styles.recipes}>
      <h2>Mais Populares</h2>
      <ul className={styles.recipesList}>
      {recipes.map(recipe => {
          return <Recipes recipe={recipe}/>
        })}
      </ul>
    </div>
    </>
  )
}