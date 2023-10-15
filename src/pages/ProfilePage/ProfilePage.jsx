// npm modules
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

// css
import styles from './ProfilePage.module.css'

// services
import * as profileService from '../../services/profileService'

const ProfilePage = (props) => {
  const [profile, setProfile] = useState(null)
  const { profileId } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      const ProfileData = await profileService.showProfile(profileId)
      setProfile(ProfileData)
    }
    fetchProfile()
  }, [profileId])
  
  
  return (  
    <main>
      <header>
        <h1>{profile.name}</h1>
      </header>
      
      
    </main>


  )
}

export default ProfilePage