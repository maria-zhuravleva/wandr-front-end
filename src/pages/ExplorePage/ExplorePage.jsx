// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

// css
import styles from './ExplorePage.module.css'

// components
import PostCard from "../../components/PostCard/PostCard"

const ExplorePage = () => {
  const [followingPosts, setFollowingPosts] = useState([])
  const { profileId } = useParams()

  useEffect(() => {
    const fetchFollowingPosts = async () => {
      const followingPostsData = await profileService.explorePage(profileId)
      setFollowingPosts(followingPostsData)
    }
    fetchFollowingPosts()
  }, [profileId])

  return (
    <div className={styles.exploreListContainer}>
      <div className={styles.exploreListHeading}>
        <h1>Explore Page</h1>
      </div>
      <div className={styles.postCardContainer}>
        {followingPosts.length === 0 ? (
          <>
            <p>No posts by available by people you follow</p>
            <h4>Explore more people to follow here!</h4>
            <Link to={'/profiles'}>
              <button>Explore More Profiles</button>
            </Link>
          </>
        ) : (
          <>
            {followingPosts.map((post) => {
              if (post.public) {
                return <PostCard key={post._id} post={post} />;
              }
              return null;
            })}
          </>
        )}
      </div>
      <div className={styles.exploreBtn}>
        <Link to={'/profiles'}>
          <button>Wanderers</button>
        </Link>
      </div>
    </div>
  )
}

export default ExplorePage