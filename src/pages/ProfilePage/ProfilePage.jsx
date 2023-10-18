// npm modules
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
// css
import styles from './ProfilePage.module.css'
import avatar from "../../assets/icons/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPerson } from '@fortawesome/free-solid-svg-icons';
// services
import * as profileService from '../../services/profileService'
import * as postService from '../../services/postService'
// pages
import FollowingIndex from "../FollowingIndex/FollowingIndex"
import EditProfile from "../EditProfile/EditProfile"
// components
import PostCard from "../../components/PostCard/PostCard"
import Following from "../../components/Following/Following"
//
const ProfilePage = (props) => {
  const [profile, setProfile] = useState({})
  const { profileId } = useParams()
  const [profilePosts, setProfilePosts] = useState([])
  console.log(profilePosts)
  const [savedProfilePosts, setSavedProfilePosts] = useState([])
const [isTopContributor,setIsTopContributor]=useState(false)
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
      if (ProfileData.saves && ProfileData.saves.length > 0) {
        const savedPostDetails = await Promise.all(
          ProfileData.saves.map(async (postId) => {
            return await postService.show(postId)
          })
        )
        setSavedProfilePosts(savedPostDetails)
      }
      if((profilePosts.length>1) || (profile.followers>4)){
        setIsTopContributor(true)
      }
    }
    fetchProfile()
  
  }, [profileId,profilePosts,profile.followers])

  const handleFollow = async (profileId) => {
    const followerList = await profileService.addFollow(profileId)
    setProfile({...profile, followers:  followerList})
  }

  const handleUnFollow = async (profileId) => {
    const followerList = await profileService.unFollow(profileId)
    setProfile({...profile, followers:  followerList})
  }

  return (
    <div className={styles.profilePageContainer}>
      <header className={styles.ppHeader}>
        <h1>{profile.name}</h1>
        {isTopContributor ?
          <div className={styles.topContributor}>
            <FontAwesomeIcon icon={faPerson} beat style={{color: "#1db45f",fontSize:'50px'}} />
          </div>
          : ""}
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
        <div className={styles.editProfileButton}>
          {props.user?.profile === profileId && (
            <Link to={`/profiles/${profileId}/edit`} state={profile} >
              <button>Edit profile</button>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.followersContainer}>
        {<Following profile={profile} user={props.user} handleFollow={handleFollow} handleUnFollow={handleUnFollow} />}
        <Link to={`/profiles/${profile._id}/following`}>
          View Following
        </Link>
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