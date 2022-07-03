import styles from './Recipes.module.css'

export function Recipes({recipe}){
  return (
    <li className={styles.recipeItem}>
        <img src={recipe.image} alt="" />
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <h3>R$ {recipe.value}</h3>
    </li>
  )
}