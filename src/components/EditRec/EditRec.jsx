// npm modules
import { useState } from "react";

import styles from './EditRec.module.css'

const EditRec = (props) => {
  const [formData, setFormData] = useState(props.rec)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleClearField = e => {
    setFormData({...formData, [e.target.name]: ''})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditComment(formData)
    props.handleHideForm()
  }

  return (  

  )
}
 
export default EditRec