// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

import avatar from "../../assets/icons/avatar.png"


const FollowerList = () => {
  const [followerList, setFollowerList] = useState([])
  const { profileId } = useParams()

useEffect(() => {
  const fetchFollowers = async () => {
    const followerData = await profileService.showFollowers(profileId)
    setFollowerList(followerData)
  }
  fetchFollowers()
},[profileId])

  return (  
    <>
    <h1>Followers: </h1>
    {followerList.length === 0 ? (
      <p>No followers yet</p>
    ) : (
      followerList.map((follower) => (
        <Link key={follower._id} to={`/profiles/${follower._id}`}>
          <img src={follower.photo || avatar} alt="profile image" />
          <p>{follower.name}</p>
        </Link>
      ))
    )}
    </>
  )
}

export default FollowerList