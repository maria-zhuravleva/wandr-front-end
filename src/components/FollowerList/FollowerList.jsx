// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'


const FollowerList = () => {
  const [followerList, setFollowerList] = useState([])
  const { profileId } = useParams()
// api call useEffect
useEffect(() => {
  const fetchFollowers = async () => {
    const followerData = await profileService.showFollowing(profileId)
    setFollowerList(followerData)
  }
  fetchFollowers()
},[profileId])

// handleShowFollowers

  return (  

    // set State
    <>
    <h1>List of Followers</h1>
    
    </>
  )
}

export default FollowerList