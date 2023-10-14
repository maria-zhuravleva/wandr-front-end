//npm modules

//components
import { initialState } from './initialState.js'

//css
import { useState } from 'react'
import styles from './NewPost.module.css'

const NewPost = (props) => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleChecked = (e, status) => {
    setFormData({...formData, public: status})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddPost(formData)
    console.log("submitted")
  }

  return ( 
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="public-input">Make Public?</label>
        <input 
          type="checkbox"
          name="public"
          id="public-input"
          value={formData.public}
          onChange={e => handleChecked(e, !formData.public)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
   )
}
 
export default NewPost