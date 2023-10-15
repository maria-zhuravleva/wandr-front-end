
import { Link } from 'react-router-dom'
// css
import styles from './Landing.module.css'
// import bannerImage from "../../assets/img/default.jpg"
import React from 'react'
import missionImage from "../../assets/img/default-pic2.jpg"
import quotes from "../../assets/icons/quotes.png"
import NavBar from '../../components/NavBar/NavBar'
import PostCard from '../../components/PostCard/PostCard'

//components

const Landing = (props) => {

    return (
    <>
      {/* <NavBar user={user} /> */}

      <div className={styles.banner}>
        <h1>Wandr</h1>
      </div>
      <div className={styles.container}>
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
      {props.posts.filter((post,idx)=>(idx<5))
      .map((postEle)=>{
        return(
          postEle.public && <PostCard key={postEle._id} post={postEle}/>
        )
      })}
      
              

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
