// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

// css
import styles from './ExplorePage.module.css'


const ExplorePage = () => {
  // set state
  const [followingPosts, setFollowingPosts] = useState([])
  // set useParams
  const { profileId } = useParams()

  // useEffect for database query
  useEffect(() => {
    const fetchFollowingPosts = async () => {
      const followingPostsData = await profileService.explorePage(profileId)
      setFollowingPosts(followingPostsData)
    }
    fetchFollowingPosts()
  }, [profileId])

  return (  
    <>
    <header>
    <h1>Explore Page</h1>
    </header>
    <main>
      {/* map over posts to a card component */}
    </main>

    </>
  )
}

export default ExplorePage