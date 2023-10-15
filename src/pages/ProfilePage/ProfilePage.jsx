// npm modules
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

// css
import styles from './ProfilePage.module.css'

// services
import * as profileService from '../../services/profileService'
import * as postService from '../../services/postService'

// components
import PostCard from "../../components/PostCard/PostCard"

const ProfilePage = () => {
  const [profile, setProfile] = useState({})
  const { profileId } = useParams()

  const [profilePosts, setProfilePosts] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const ProfileData = await profileService.showProfile(profileId)
      setProfile(ProfileData)
      if (ProfileData.posts && ProfileData.posts.length > 0) {
        const postDetails = await Promise.all(
          ProfileData.posts.map(async (postId) => {
            return await postService.show(postId)
          })
        )
        setProfilePosts(postDetails);
      }
    }
    fetchProfile()
  }, [profileId])
  
  
  
  return (  
    <main>
      <header>
        <h1>{profile.name}</h1>
      </header>
      <section>
      <h1>This is a profile page</h1>
      <img src={profile.photo} alt="profile image" />
      <h5>Member Since </h5>
      {/* change how the date is presented later */}
      <p>{profile.createdAt}</p> 
      </section>
      <section>
        <h1>My Posts</h1>
        {profilePosts &&
    profilePosts
      .filter((post) => post !== null) // Filter out null posts
      .map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      </section>
    </main>
  )
}

export default ProfilePage