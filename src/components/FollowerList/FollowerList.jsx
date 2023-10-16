// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'


const FollowerList = () => {
  const [followerList, setFollowerList] = useState([])
  const { profileId } = useParams()

useEffect(() => {
  const fetchFollowers = async () => {
    const followerData = await profileService.showFollowing(profileId)
    setFollowerList(followerData)
  }
  fetchFollowers()
},[profileId])

  return (  
    <>
    <h1>List of Followers</h1>
    {followerList.length === 0 ? (
      <p>No followers yet</p>
    ) : (
      <ul>
        {followerList.map((follower) => {
          <li key={follower._id}>{follower.name}</li>
        })}
      </ul>
    )}
    </>
  )
}

export default FollowerList