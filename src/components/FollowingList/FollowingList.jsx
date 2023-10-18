// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

import avatar from "../../assets/icons/avatar.png"

const FollowingList = () => {
  const [followingList, setFollowingList] = useState([])
  const { profileId } = useParams()

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const followingData = await profileService.showFollowing(profileId)
        const followingWithProfileData = await Promise.all(
          followingData.map(async (following) => {
            const profileData = await profileService.showProfile(following._id)
            return { ...following, profile: profileData }
          })
        )
        setFollowingList(followingWithProfileData)
      } catch (error) {
        console.error(error)
      }
    };
  
    fetchFollowing();
  }, [profileId]);

  return ( 
    <>
      <h1>Following: </h1>
      {followingList.length === 0 ? (
      <p>Not following anyone yet</p>
    ) : (
      followingList.map((follower) => (
        <Link key={follower._id} to={`/profiles/${follower._id}`}>
          <img src={follower.profile.photo || avatar} alt="profile image" />
          <p>{follower.profile.name}</p>
        </Link>
      ))
    )}
    </>
  )
}

export default FollowingList