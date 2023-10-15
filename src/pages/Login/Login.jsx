// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className={styles.loginContainer}>
      <h1>LOG IN</h1>
      <p className={styles.loginMessage}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.loginForm}>
        <label className={styles.loginLabel}>
          Email
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className={styles.loginLabel}>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <div className={styles.loginButtonWrapper}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none', borderTop: '1px solid black', padding: '15px 20px', borderBottom: '1px solid black', width: '150px', cursor: 'pointer', borderRadius: '0', display: 'inline-block', textAlign: 'center', marginRight: '20px', fontSize: '20px'}}>CANCEL</Link>
          <button className={styles.loginButton} disabled={isFormInvalid()}>
            Log In
          </button>
        </div>
        <div className={styles.signinImageWrapper}></div>
      </form>
    </main>
  )
}

export default LoginPage
