import { useState } from "react"

const Following = (props) => {
  const isSelf = props.profile._id === props.user.profile
  const hasFollowed = props.profile.followers?.some(p => p._id === props.user.profile)
  
  const handleClick = (e) => {
    if (e.target.innerText === 'Follow') {
      props.handleFollow(props.profile._id)
      e.target.innerText = 'Unfollow'
    } else {
      props.handleUnFollow(props.profile._id)
      e.target.innerText = 'Follow'
    }
  }

  return ( 
    <>
      <p>Followers: {props.profile.followers?.length}</p>
      <p>Following: {props.profile.following?.length}</p>
      {!isSelf && 
          <button onClick={handleClick}>
              {!hasFollowed ? 'Follow' : 'Unfollow'}
          </button>
      }
    </>
  )
}
 
export default Following