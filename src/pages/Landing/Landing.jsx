// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// css
import styles from './Landing.module.css'
import missionImage from "../../assets/img/default-pic2.jpg"
import quotes from "../../assets/icons/quotes.png"

//components
import SearchPost from '../../components/SearchPost/SearchPost'
import PostCard from '../../components/PostCard/PostCard'


const Landing = (props) => {
  const allPosts = props.posts
  const [searchResults,setSearchResults]= useState([])
  const [errMsg,setErrMsg]= useState("")

  const handlePostSearch = formData =>{
    const filteredPostSearch= allPosts.filter(post => post.location.toLowerCase().includes(formData.query.toLowerCase()))
    if(!filteredPostSearch.length){
      setErrMsg('No posts')
    }else{
      setErrMsg("")
    }
    setSearchResults(filteredPostSearch)
  }

  return (
    <>
      <div className={styles.searchpost}>
      {errMsg && <h2>{errMsg}</h2>}
        <SearchPost handlePostSearch={handlePostSearch}/>
        {searchResults.map(post =>
          <PostCard key={post._id}
          post={post}/>)}
      </div>

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
