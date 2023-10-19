//npm modules
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
//services
import {explorePage as explorePage} from '../../services/profileService'
//components
import PostCard from "../PostCard/PostCard"
//css
import styles from './FollowingPosts.module.css'
import arrowRight from "../../assets/icons/arrow-right.png"

const FollowingPosts = (props) => {
  const [followingPosts, setFollowingPosts] = useState([])

  useEffect(() => {
    const fetchFollowingPosts = async () => {
      try {
        const followingPostsData = await explorePage(props.user?.profile)
        setFollowingPosts(followingPostsData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchFollowingPosts()
  }, [props.user?.profile])

  if (!followingPosts) return <h4>Loading posts...</h4>

  return ( 
    <>
      {followingPosts.map((post, idx) => (
        post.public ? (
          <React.Fragment key={post._id}>
          {idx < 5 && <PostCard post={post} />}
        </React.Fragment>
      ) : null
      ))}

      <Link to={`/profiles/${props.user?.profile}/following/posts`} className={styles.landingPageArrow}>
          <p>Explore the Most Recent Posts of your Following</p> 
          <img src={arrowRight} alt="arrow" />
      </Link>
    </>
   )
}
 
export default FollowingPosts