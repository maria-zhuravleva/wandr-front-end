// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// css
import styles from './Landing.module.css'
// import missionImage from "../../assets/img/default-pic2.jpg"
import arrowRight from "../../assets/icons/arrow-right.png"
import quotes from "../../assets/icons/quotes.png"

//components
import SearchPost from '../../components/SearchPost/SearchPost'
import PostCard from '../../components/PostCard/PostCard'


const Landing = (props) => {
  const publicPosts = props.posts.filter(post => post.public)

  return (
    <>
      <div className={styles.searchpost}>
      {props.errMsg && <h2>{props.errMsg}</h2>}
        <SearchPost handlePostSearch={props.handlePostSearch}/>
        {props.searchResults.map(post =>
          <PostCard key={post._id}
          post={post}/>)}
      </div>

      <div className={styles.banner}>
        <h1>Wandr</h1>
      </div>
      <div className={styles.landingContainer}>
        <div className={styles.columnOne}>
        </div>
        <div className={styles.column}>
          <h5>Our Mission</h5>
          <div className={styles.quotesWrapper}>
            <img src={quotes} alt="quotes" className={styles.quotes} />
          </div>
          <p>Explore the world, and let every adventure be a story worth telling</p>
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
          {publicPosts.map((post, idx) => 
            <>
              {idx < 5 && <PostCard key={post._id} post={post}/>}
            </>
          )}
        </div>
        <Link to="/posts" className={styles.landingPageArrow}>
          <p>See More</p> 
          <img src={arrowRight} alt="arrow" />
        </Link>
      </div>
    </>
  )
}

export default Landing
