import styles from './Intro.module.css';
import sushi from '../assets/sushi.png';
import prato from '../assets/img-prato.png';
import recipe1 from '../assets/prato-1.png';
import recipe2 from '../assets/prato-2.png';
import recipe3 from '../assets/prato-3.png';
import profile1 from '../assets/img-profile-1.png';
import profile2 from '../assets/img-profile-2.png';
import location from '../assets/mapa-rio.png'
import { Recipes } from './Recipes';
import { Comments } from './Comments';
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

  const comments = [
    {
      image: profile1,
      user: 'Daniele Almeida',
      comment: 'Ótimo serviço! Encantada com a qualidade dos pratos.',
      rating: 5
    },
    {
      image: profile2,
      user: 'Ricardo França',
      comment: 'Não é apenas a comida excelente, o serviço torna a experiência especial.',
      rating: 5
    },
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
    <div className={styles.comments}>
      <h2>Comentários</h2>
      <ul className={styles.commentslist}>
      {comments.map(comment => {
        return <Comments  comment={comment}/>
      })}
      </ul>
    </div>
    <div className={styles.location}>
      <h2>Localização</h2>
      <img src={location} alt="" />
    </div>
    </>
  )
}