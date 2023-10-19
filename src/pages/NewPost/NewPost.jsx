//npm modules
import { useState } from 'react'
import { useTheme } from '../../components/ThemeContext/ThemeContext'

//components
import { initialState } from './initialState.js'

//css
import styles from './NewPost.module.css'

const NewPost = (props) => {
  const [formData, setFormData] = useState(initialState)
  const { theme, setTheme } = useTheme()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChecked = (e, status) => {
    setFormData({ ...formData, public: status })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddPost(formData)
  }

  return (
    <div className={styles.newPostContainer}>
      <h1 className={`${styles.newPostH1} ${styles[theme]}`}>NEW POST</h1>
      <div className={styles.newPostFormWrapper}>
        <form onSubmit={handleSubmit} className={`${styles.newPostFormContainer} ${styles[theme]}`}>
          <div className={styles.inputWrapper}>
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
          <div className={styles.inputWrapper}>
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
          <div className={styles.inputWrapper}>
            <label htmlFor="content-input">Content</label>
            <textarea
              required
              type="text"
              name="content"
              id="content-input"
              wrap="hard"
              value={formData.content}
              placeholder="Content"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="public-input">Make Public?</label>
            <input
              type="checkbox"
              name="public"
              id="public-input"
              checked={formData.public}
              onChange={e => handleChecked(e, !formData.public)}
              className={styles.checkbox}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={`${styles.imageWrapper} ${styles[theme]}`}></div>
    </div>
  )
}

export default NewPost