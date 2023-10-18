import { useState, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styles from './ProfilePage.module.css'
import avatar from "../../assets/icons/avatar.png"


const EditProfile = (props) => {
  const imgInputRef = useRef(null)
  const [message, setMessage] = useState('')
  const { state } = useLocation()
  const [profileFormData, setProfileFormData] = useState(state)
  const [photoData, setPhotoData] = useState({ photo: null })
  const handleChange = (e) => {
    setProfileFormData({ ...profileFormData, [e.target.name]: e.target.value })
  }
  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)
    // cloudinary supports files up to 10.4MB each as of May 2023
    if (file.size >= 10485760) {
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }
    setMessage(errMsg)
    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateProfile(profileFormData, photoData.photo)
  }
  return (
    <div className={styles.editProfileContainer}>
      <h1>Profile Settings</h1>
      <p className={styles.editMessage}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} >
        <div className={styles.ppAvatar}>
          {profileFormData.photo ? (
            <img src={profileFormData.photo} alt="profile image" />
          ) : (
            <img src={avatar} alt="avatar" />
          )}
        </div>

        <label>Change Profile Picture</label>
        <input
          type="file"
          name="photo"
          onChange={handleChangePhoto}
          ref={imgInputRef}
        />
        

        <label>Name</label>
        <input
          type="text"
          value={profileFormData.name}
          name="name"
          onChange={handleChange} 
        />
        
        <label>Email</label>
        <input
          type="text"
          value={props.user.email}
          name="email"
          onChange={handleChange}
        />

        <label>Bio</label>
        <textarea
          type="text"
          value={profileFormData.bio}
          name="bio"
          onChange={handleChange}
        />

        <button type='submit'>Save Changes</button>
      <Link to={`/profiles/${props.user.profile}`}>
        <button>Cancel</button>
      </Link>
      </form>
    </div>
  )
}
export default EditProfile