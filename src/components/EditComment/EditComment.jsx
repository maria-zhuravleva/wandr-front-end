//npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"
//css
import styles from './EditComment.module.css'

const EditComment = (props) => {
  const [formData, setFormData] = useState(props.comment)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditComment(formData)
    setFormData({ text: '' })
  }

  return ( 
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea 
        required
        type='text'
        name='text'
        value={formData.text}
        onChange={handleChange}
      />
      <button type='submit'>Save</button>
    </form>
  )
}

export default EditComment