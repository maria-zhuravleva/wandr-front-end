//css
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  return ( 
    <article>
      <header>
       {/* author */}
      </header>
      <p>{props.comment.text}</p>
      {props.author === props.user &&  <button>Delete</button>}
    </article>
   )
}
 
export default CommentCard