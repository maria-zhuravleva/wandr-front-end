import { useState } from "react"
import { useTheme } from '../../components/ThemeContext/ThemeContext'

import styles from './Search.module.css'
import searchIcon from '../../assets/icons/search.png'

const SearchPost = (props) => {
  const [formData,setFormData]=useState({query:''})
  const { theme, setTheme } = useTheme()
  
  
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
        style={{ backgroundColor: theme === 'nordic' ? 'white' : 'transparent',
        border: theme === 'nordic' ? '1px solid black': '1px solid black',
      }}    
      />
      <button type="submit" className={styles.searchIcon} style={{outline:'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}>
        <img src={searchIcon} alt="search" className={styles.searchImg}  />
      </button>

    </form>
  )
}

export default SearchPost