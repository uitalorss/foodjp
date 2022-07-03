import styles from './Comments.module.css';

export function Comments({comment}){
  return(
    <li className={styles.commentItem}>
      <img src={comment.image} alt="" />
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
      <span>{comment.rating}</span>
    </li>
  )
}