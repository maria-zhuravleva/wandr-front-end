//npm modules
import { useState } from "react"

//css
import styles from './NewComment.module.css'
import sendArrow from "../../assets/icons/send.png"

const NewComment = (props) => {
  const [formData, setFormData] = useState({ text: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddComment(formData)
    setFormData({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type='text'
        name='text'
        value={formData.text}
        placeholder='Add a comment'
        onChange={handleChange}
        className={styles.commentTextarea}
      />
      <button type='submit' className={styles.sendArrow}>
        <img src={sendArrow} alt="send" className={styles.send} />
      </button>
    </form>
  )
}

export default NewComment