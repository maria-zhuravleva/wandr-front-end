//css
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  return ( 
    <article>
      <header>
       {/* author */}
      </header>
      <p>{props.comment.text}</p>
      {props.author === props.user.profile._id 
      && <button onClick={() => props.handleEditComment(props.comment._id)}>Edit</button>
      && <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>}
    </article>
   )
}
 
export default CommentCard