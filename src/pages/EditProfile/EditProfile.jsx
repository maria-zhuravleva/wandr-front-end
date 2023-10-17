import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditProfile = () => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  console.log(formData)
  return ( 
    <>
    <h1>Edit profile</h1>
    <form autoComplete="off"  >
        <label >
          Name
          <input type="text" value={formData.name} name="name"  />
        </label>
        <label >
          Email
          <input
            type="text"
            value={formData.email}
            name="email"
          />
        </label>
        </form>
        </>
   );
}
 
export default EditProfile;