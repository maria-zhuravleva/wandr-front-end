//npm modules
import { useState, useRef } from 'react'
//services
import * as postService from '../../services/postService'

const PhotoUpload = (props) => {
  const [photoData, setPhotoData] = useState({ mainPhoto: null })

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
    setPhotoData({ mainPhoto: e.target.files[0] })
  }
  const handleSubmit = async () => {
    await postService.addPostPhoto(props.post._id, photoData.mainPhoto)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label>Upload Photo
        <input 
          type="file" 
          name="mainPhoto" 
          onChange={handleChangePhoto}
          ref={imgInputRef}
        />
      </label>
      <button type="submit">Upload</button>
    </form>
   )
}
 
export default PhotoUpload