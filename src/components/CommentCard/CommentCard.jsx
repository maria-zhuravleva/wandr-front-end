//npm modules
import { useState } from 'react'
//components
import EditComment from '../EditComment/EditComment'
//css
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  const [showForm, setShowForm] = useState(false)

  const showEditCommentForm = () => {
    setShowForm(true)
  }

  return ( 
    <article>
      <header>
       {/* author */}
      </header>
      <p>{props.comment.text}</p>
      {props.author === props.user.profile._id && <button onClick={() => showEditCommentForm()}>Edit</button>}
      {props.author === props.user.profile._id && <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>}
      
      {/* show edit comment form on button click */}
      {showForm && <EditComment comment={props.comment} handleEditComment={props.handleEditComment} />}
    </article>
   )
}
 
export default CommentCard