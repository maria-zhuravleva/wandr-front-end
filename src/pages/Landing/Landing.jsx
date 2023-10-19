// import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useTheme } from '../../components/ThemeContext/ThemeContext'
// css
import styles from './Landing.module.css'

// import missionImage from "../../assets/img/default-pic2.jpg"
import arrowRight from "../../assets/icons/arrow-right.png"
import quotes from "../../assets/icons/quotes.png"

//components
// import SearchPost from '../../components/SearchPost/SearchPost'
import PostCard from '../../components/PostCard/PostCard'

// services
import * as profileService from '../../services/profileService'

const Landing = (props) => {
  const publicPosts = props.posts.filter(post => post.public)
  const sortedPublicPosts = publicPosts.sort((b, a) => a.likes - b.likes).reverse()
  const { theme, setTheme } = useTheme()

  const [followingPosts, setFollowingPosts] = useState([])

  useEffect(() => {
    const fetchFollowingPosts = async () => {
      try {
        const followingPostsData = await profileService.explorePage(props.user?.profile)
        setFollowingPosts(followingPostsData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchFollowingPosts()
  }, [props.user?.profile])

  return (
    <div className={styles.landingMainContainer}>
      <div className={styles.searchThemesContainer}> 
        <div className={`${styles.themeWrapper} ${styles[theme]}`}>
          <button onClick={() => setTheme('nordic')}>nordic</button>
          <button onClick={() => setTheme('desert')}>desert</button>
        </div>
      </div>
      <div className={styles.bannerWrapper}>
        <div className={`${styles.banner} ${styles[theme]}`}>
        <h1>Wandr</h1>
        </div>
      </div>

      <div className={styles.twoColumnsContainer}>
        <div className={`${styles.columnOne} ${styles[theme]}`}>
        </div>

        <div className={styles.column}>
          <h5 className={`${styles.elementH5} ${styles[theme]}`}>Our Mission</h5>
          <div className={styles.quotesWrapper}>
            <img src={quotes} alt="quotes" className={styles.quotes} />
          </div>
          <p className={`${styles.elementP} ${styles[theme]}`}>Explore the world, and let every adventure be a story worth telling</p>
          <div className={styles.linkWrapper}>
            <Link to="/about" className={`${styles.customLink} ${styles[theme]}`}>Learn more</Link>
          </div>
        </div>
      </div>
      <div className={styles.topPosts} >
        <div className={styles.topPostsLines}>
          <hr className={styles.topPostsLine} />
          <h3>Top Posts</h3>
          <hr className={styles.topPostsLine} />
        </div>
        <div className={styles.topPostsContent}>
          {sortedPublicPosts.map((post, idx) => 
            <>
              {idx < 5 && <PostCard key={post._id} post={post}/>}
            </>
          )}
        </div>
        <div className={styles.landingPageArrowContainer}>
          <Link to="/posts" className={styles.landingPageArrow}>
            <p>See More</p> 
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>

      <div className={styles.topPosts}>
        {props.user?.profile && <div className={styles.topPostsLines}>
          <hr className={styles.topPostsLine} />
          <h3>Explore Posts by Those You're Following</h3>
          <hr className={styles.topPostsLine} />
      </div>}

      <div className={styles.topPostsContent}>
        {props.user?.profile && Array.isArray(followingPosts) && followingPosts.map((post, idx) => (
          post.public ? (
          <React.Fragment key={post._id}>
            {idx < 5 && <PostCard post={post} />}
          </React.Fragment>
        ) : null
  ))}
</div>
      
      {props.user?.profile && <Link to={`/profiles/${props.user?.profile}/following/posts`} className={styles.landingPageArrow}>
          <p>Explore the Most Recent Posts of your Following</p> 
          <img src={arrowRight} alt="arrow" />
        </Link>
      }
      </div>
    </div>
  )
}

export default Landing
