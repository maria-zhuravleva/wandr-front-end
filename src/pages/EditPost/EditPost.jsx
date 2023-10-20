//npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../../components/ThemeContext/ThemeContext'
//css
import styles from './EditPost.module.css'

const EditPost = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  const { theme, setTheme } = useTheme()
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChecked = (e, status) => {
    setFormData({ ...formData, public: status })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpDatePost(formData)
  }

  return (
    <div className={styles.editPostContainer}>
      <h3>Refine Your Travel Itinerary</h3>
      <form onSubmit={handleSubmit} className={`${styles.editPostForm} ${styles[theme]}`}>
        <div className={`${styles.editPostWrapper} ${styles[theme]}`}>
          <label htmlFor="title-input">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.editPostWrapper} ${styles[theme]}`}>
          <label htmlFor="location-input">Location</label>
          <input
            required
            type="text"
            name="location"
            id="location-input"
            value={formData.location}
            placeholder="Location"
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.editPostWrapper} ${styles[theme]}`}>
          <label htmlFor="content-input">Content</label>
          <textarea
            required
            type="text"
            name="content"
            id="content-input"
            value={formData.content}
            placeholder="Content"
            onChange={handleChange}
          />
        </div>
        <div className={styles.editPostWrapper}>
          <label htmlFor="public-input" className={`${styles.makePublicLabel} ${styles[theme]}`}>Make Public?</label>
          <input 
            type="checkbox"
            name="public"
            id="public-input"
            checked={formData.public}
            onChange={e => handleChecked(e, !formData.public)}
            className={styles.checkbox}
          />
        </div>
        <div className={`${styles.editPostButton} ${styles[theme]}`}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditPost