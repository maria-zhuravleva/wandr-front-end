// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// components
import FollowerList from "../../components/FollowerList/FollowerList"
import FollowingList from "../../components/FollowingList/FollowingList"

// services
import * as profileService from "../../services/profileService";

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
      <FollowerList />
      <FollowingList />
      <Link to={`/profiles/${profile._id}`} >
        <button>Back to {profile.name}'s profile</button>
      </Link>
    </>
  )
}

export default FollowingIndex