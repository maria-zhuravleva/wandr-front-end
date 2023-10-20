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
    <div className={styles.loginContainer}>
      <h1>LOG IN</h1>
      <div className={styles.loginFormWrapper}>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.loginFormContainer}>
          <p className={styles.centeredText}>
            Back for more travels? Please log in below
          </p>
          <div className={styles.inputLoginWrapper}>
            <label className={styles.loginLabel}>
              Email
              <input
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.inputLoginWrapper}>
            <label className={styles.loginLabel}>
              Password
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.loginButtonWrapper}>
            <div className={styles.message}>{message}</div>
            <Link to="/" className={styles.cancelLink}>
              CANCEL
            </Link>
            <button className={styles.loginButton} disabled={isFormInvalid()}>
              Log In
            </button>
          </div>
        </form>
        <div className={styles.loginImageWrapper}>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
