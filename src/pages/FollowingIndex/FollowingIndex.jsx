// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// components
import FollowerList from "../../components/FollowerList/FollowerList"
import FollowingList from "../../components/FollowingList/FollowingList"

// services
import * as profileService from "../../services/profileService"

// css
import styles from './FollowingIndex.module.css'

const FollowingIndex = () => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.showProfile(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])


  return (  
    <>
    <div className={styles.backBtn}>
      <Link to={`/profiles/${profile._id}`} >
        <button>Back</button>
        {/* <button>Back to {profile.name}'s profile</button> */}
      </Link>
    </div>
    <div className={styles.followersFollowingContainer}>
      <div className={styles.followerFollowingContainer}>
        <div className={styles.followerContainer}> 
          <FollowerList />
        </div>
        <div className={styles.followingContainer}>
          <FollowingList />
        </div>
      </div>
    </div>
    </> 
  )
}

export default FollowingIndex