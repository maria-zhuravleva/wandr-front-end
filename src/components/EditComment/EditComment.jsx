//npm modules
import { useState } from "react"

//css
import styles from './EditComment.module.css'

const EditComment = (props) => {
  const [formData, setFormData] = useState(props.comment)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClearField = e => {
    setFormData({ ...formData, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditComment(formData)
    props.handleHideForm()
  }

  return (
    <div className={styles.editCommentContainer}>
      <form className={styles.editCommentForm} onSubmit={handleSubmit}>
        <textarea
          required
          type='text'
          name='text'
          value={formData.text}
          onChange={handleChange}
          onClick={handleClearField}
        />
        <button type='submit' className={styles.editCommentButton}>Save</button>
      </form>
    </div>
  )
}

export default EditComment