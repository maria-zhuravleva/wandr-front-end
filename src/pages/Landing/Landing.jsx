import React from 'react';
import { Link } from 'react-router-dom'
// css
import styles from './Landing.module.css'
import bannerImage from "../../assets/img/default.jpg"
import missionImage from "../../assets/img/default-pic2.jpg"
import quotes from "../../assets/icons/quotes.png"

const Landing = ({ user }) => {
  return (
    <>
      <div className={styles.banner}>
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <img src={missionImage} alt="waterfall" />
        </div>
        <div className={styles.column}>
          <h5>Our Mission</h5>
          <div className={styles.quotesWrapper}>
            <img src={quotes} alt="quotes" className={styles.quotes} />
          </div>
          <p style={{ width: '200px', opacity: '1' }}>Explore the world, and let every adventure be a story worth telling</p>
          <div className={styles.linkWrapper}>
            <Link to="/about" className={styles.customLink}>Learn more</Link>
          </div>
        </div>
      </div>
      <div className={styles.topPosts}>
        <div className={styles.topPostsLines}>
          <hr className={styles.topPostsLine} />
          <h3>Top Posts</h3>
          <hr className={styles.topPostsLine} />
        </div>
        <div className={styles.topPostsContent}>
          <img src={missionImage} alt="waterfall" />
          <img src={missionImage} alt="waterfall" />
          <img src={missionImage} alt="waterfall" />
        </div>
      </div>
    </>
  )
}

export default Landing
