//npm modules
import { useState } from "react"
//css
import styles from './NewComment.module.css'

const NewComment = (props) => {
  const [formData, setFormData] = useState({text: ''})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
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
      />
      <button type='submit'>Create</button>
    </form>
  )
}
 
export default NewComment