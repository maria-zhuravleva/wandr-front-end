//npm modules
import { useState, useRef } from 'react'
//css
import styles from './PhotoUpload.module.css'

const MorePhotosUpload = (props) => {
  const [photoData, setPhotoData] = useState({ photo: null })

  const imgInputRef = useRef(null)

  const [message, setMessage] = useState('')

  const handleChangePhoto = (e) => {
    const file = e.target.files[0]
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
    setPhotoData({ photo: e.target.files[0] })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddMorePostPhotos(props.post._id, photoData.photo)
    props.handleHideMore()
  }

  return ( 
    <div className={styles.uploadPhotoContainer}>
      <form onSubmit={handleSubmit} className={styles.uploadPhotoForm}>
        <label>Upload More Photos
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label>
        <button type="submit" className={styles.fileInputButton}>Upload</button>
      </form>
    </div>
  )
}

export default MorePhotosUpload