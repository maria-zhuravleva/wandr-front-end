//npm modules
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../components/ThemeContext/ThemeContext'

// css
import styles from './Landing.module.css'
import arrowRight from "../../assets/icons/arrow-right.png"
import quotes from "../../assets/icons/quotes.png"
import FollowingPosts from '../../components/FollowingPosts/FollowingPosts'

//components
import PostCard from '../../components/PostCard/PostCard'

const Landing = (props) => {
  const publicPosts = props.posts.filter(post => post.public)
  const sortedPublicPosts = publicPosts.sort((b, a) => a.likes - b.likes).reverse()
  const { theme, setTheme } = useTheme()

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
            <React.Fragment key={idx}>
              {idx < 5 && <PostCard key={post._id} post={post} />}
            </React.Fragment>
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
        {props.user?.profile &&
          <div className={styles.topPostsLines}>
            <hr className={styles.topPostsLine} />
            <h3>Explore Posts by Those You're Following</h3>
            <hr className={styles.topPostsLine} />
          </div>
        }
        <div className={styles.topPostsContent}>
          {props.user?.profile && <FollowingPosts user={props.user} />}
        </div>
      </div>
    </div>
  )
}

export default Landing