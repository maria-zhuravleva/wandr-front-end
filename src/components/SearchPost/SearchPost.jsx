import { useState } from "react"

import styles from './Search.module.css'

const SearchPost = (props) => {
  const [formData,setFormData]=useState({query:''})
  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
    props.handlePostSearch(formData)

  }
  const handleClearField = e => {
    setFormData({...formData, [e.target.name]: ''})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    props.handlePostSearch(formData)
}
  return (
    <form onSubmit={handleSubmit}
    className={styles.searchForm}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search"
        value={formData.query}
        onChange={handleChange}
        onClick={handleClearField}     
      />
      <button type="submit" className={styles.searchIcon} >
        <img src="src/assets/icons/search.png" alt="search" className={styles.searchImg} />
      </button>

    </form>
  )
}

export default SearchPost