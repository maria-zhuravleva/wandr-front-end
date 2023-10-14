// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className='container'>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/posts">All Posts</NavLink></li>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
      <ul>
          <li><NavLink to="/">Wandr</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
