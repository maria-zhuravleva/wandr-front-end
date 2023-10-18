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
      const followingData = await profileService.showFollowing(profileId)
      setFollowingList(followingData)
    }
    fetchFollowing()
  },[profileId])

  return ( 
    <>
      <h1>Following: </h1>
      {followingList.length === 0 ? (
      <p>Not following anyone yet</p>
    ) : (
      followingList.map((follower) => (
        <Link key={follower._id} to={`/profiles/${follower._id}`}>
          <img src={follower.photo || avatar} alt="profile image" />
          <p>{follower.name}</p>
        </Link>
      ))
    )}
    </>
  )
}

export default FollowingList