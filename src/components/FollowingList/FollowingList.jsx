// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

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
      <ul>
          {followingList.map((follower) => (
            <li key={follower._id}>{follower.name}</li>
          ))}
        </ul>
    )}
    </>
  )
}

export default FollowingList