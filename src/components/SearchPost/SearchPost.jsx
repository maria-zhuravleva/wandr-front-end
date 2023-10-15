import { useState } from "react"

import styles from './Search.module.css'

const SearchPost = (props) => {
  const [formData,setFormData]=useState({query:''})
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (formData.query) {
      props.handlePostSearch(formData)
  }
}
  return (
    <form onSubmit={handleSubmit}
      className="searchForm">
      <input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search"
        value={formData.query}
        onChange={handleChange}
        style={{
          color: '#999',       
          fontSize: '14px',
          fontStyle: 'italic',
          border: 'solid 1px black',
          height: '30px',
          width: '200px',
          padding: '10px'
        }}
      />
      <button type="submit" className={styles.searchIcon} >
        <img src="src/assets/icons/search.png" alt="menu" className={styles.searchImg} />
      </button>

    </form>
  )
}

export default SearchPost