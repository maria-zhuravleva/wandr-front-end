// npm modules
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// css
import styles from './NavBar.module.css'
import menuIcon from "../../assets/icons/menu.png"

const NavBar = ({ user, handleLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
    if (!showDropdown) {
      setTimeout(() => {
        setShowDropdown(false)
      }, 4000)
    }
  }


  return (
    <nav className={`${styles.container} ${showDropdown ? styles.fixed : ''}`}>
      <div className={styles.icon} onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
        <img src={menuIcon} alt="Menu" className={styles.img} />             
      </div>

      {user && showDropdown && (
        <ul className={styles.dropdownMenu}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to={`/profiles/${user?.profile}`}>My Profile</NavLink></li>
          <li><NavLink to="/profiles">Wanderers</NavLink></li>
          <li><NavLink to="/posts">All Posts</NavLink></li>
          <li><NavLink to="/posts/new">New Post</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
        </ul>
      )}

      {!user && (
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
