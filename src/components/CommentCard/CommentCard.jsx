//npm modules
import { useState } from 'react'
//components
import EditComment from '../EditComment/EditComment'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
//css
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleHideForm = () => {
    setShowForm(false)
  }

  return ( 
    <div className={styles.commentContainer}>
      <header>
        {<AuthorInfo content={props.comment}/>}
      </header>
      <p>{props.comment.text}</p>
      <div className={styles.editDeleteComment}>
        {props.comment.author._id === props.user.profile && <button onClick={() => handleShowForm()}>Edit</button>}
        {props.comment.author._id === props.user.profile && <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>}
      </div>
      
      {/* show edit comment form on button click */}
      {showForm && <EditComment comment={props.comment} handleEditComment={props.handleEditComment} handleHideForm={handleHideForm}/>}
    </div>
  )
}

export default CommentCard