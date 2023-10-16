// npm modules
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

// css
import styles from './ProfilePage.module.css'
import avatar from "../../assets/icons/avatar.png"


// services
import * as profileService from '../../services/profileService'
import * as postService from '../../services/postService'

// components
import PostCard from "../../components/PostCard/PostCard"
import Following from "../../components/Following/Following"

const ProfilePage = (props) => {
  console.log(props.user)
  const [profile, setProfile] = useState({})
  const { profileId } = useParams()

  const [profilePosts, setProfilePosts] = useState([])
  const [savedProfilePosts, setSavedProfilePosts] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const ProfileData = await profileService.showProfile(profileId)
      setProfile(ProfileData)
          if (ProfileData.posts && ProfileData.posts.length > 0  ) {
              const postDetails = await Promise.all(
          ProfileData.posts.map(async (postId) => {
            return await postService.show(postId)
          })
        )
        console.log(postDetails)
        setProfilePosts(postDetails);
      }
      if (ProfileData.saves && ProfileData.saves.length > 0) {
        const savedPostDetails = await Promise.all(
          ProfileData.saves.map(async (postId) => {
            return await postService.show(postId)
          })
        )
        setSavedProfilePosts(savedPostDetails)
      }
    }
    fetchProfile()
  }, [profileId])

  const handleFollow = async (profileId) => {
    const followedProfile = await profileService.addFollow(profileId)
    setProfile(followedProfile)
  }

  return (
    <div className={styles.profilePageContainer}>
      <header className={styles.ppHeader}>
        <h1>{profile.name}</h1>
      </header>
      <div className={styles.ppAvatar}>
        {profile.photo ? (
          <img src={profile.photo} alt="profile image" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </div>
      <div className={styles.ppBio}>
        <p>This is bio section</p>
      </div>
      <div className={styles.ppInfo}>
        <h5>Member Since </h5>
        {/* change how the date is presented later */}
        <p>{profile.createdAt}</p>
      </div>

      <div className={styles.followersContainer}>
        {<Following profile={profile} user={props.user} handleFollow={handleFollow} />}
      </div>

      <div className={styles.profilePostsSection}>
        <div className={styles.ppH}>
          <h1>{profile.name}'s Posts</h1>
        </div>
        <div className={styles.profilePosts}>
        
        {profilePosts &&
        profilePosts
          .filter((post) => post !== null && (post.public || props.user.profile == post.author._id)) // Filter out null posts
          .map((post) => (
            <PostCard key={post._id} post={post} />
          ))}

        
        
        </div>
      </div>

      <div className={styles.savedPostsContainer}>
        <h1>{profile.name}'s Saved Posts</h1>
        <div className={styles.savedPosts}>
          {savedProfilePosts &&
            savedProfilePosts
              .filter((post) => post !== null) // Filter out null posts
              .map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
        </div>
      </div>

    </div>
  )
}

export default ProfilePage