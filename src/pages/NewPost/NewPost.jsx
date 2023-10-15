//npm modules
import { useState, useRef } from 'react'

//components
import { initialState } from './initialState.js'

//css
import styles from './NewPost.module.css'

const NewPost = (props) => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleChecked = (e, status) => {
    setFormData({...formData, isPublic: status})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddPost(formData)
  }

  return ( 
    <>
      <main className={styles.container}>
        <h1>NEW POST</h1>
        <form onSubmit={handleSubmit}>
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
              value={formData.content}
              placeholder="Content"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="isPublic-input">Make Public?</label>
            <input 
              type="checkbox"
              name="isPublic"
              id="isPublic-input"
              checked={formData.isPublic}
              onChange={e => handleChecked(e, !formData.isPublic)}
              className={styles.checkbox}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className={styles.imageWrapper}></div>
      </main>
    </>
  )
}

export default NewPost