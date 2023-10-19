import { Link} from "react-router-dom"
import { useState, useEffect } from 'react';
// css
import styles from './Following.module.css'



const Following = (props) => {
  const [isFollowing, setIsFollowing] = useState(props.isFollowing)

  useEffect(() => {
    setIsFollowing(props.isFollowing)
  }, [props.isFollowing])


  // const handleClick = (e) => {
  //   if (e.target.innerText === 'Follow') {
  //     props.handleFollow(props.profile._id)
  //     e.target.innerText = 'Unfollow'
  //   } else {
  //     props.handleUnFollow(props.profile._id)
  //     e.target.innerText = 'Follow'
  //   }
  // }


  const handleClick = () => {
    if (isFollowing) {
      props.handleUnFollow(props.profile._id);
    } else {
      props.handleFollow(props.profile._id);
    }
    setIsFollowing(prev => !prev)
  }

  return ( 
    <div className={styles.followingContainer}>
      <p>
        <Link
          to={`/profiles/${props.profile._id}/followers`}
          className={styles.following}
          style={{
            textDecoration: 'none',
            color: '#000', 
            transition: 'color 0.3s', 
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#6f7275'; 
            e.target.style.borderBottom = 'solid 1px #6f7275';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = 'none';
            e.target.style.color = '#000';
          }}
          >
          Followers: {props.profile.followers?.length}
          </Link>
      </p>
      <p>
        <Link
          to={`/profiles/${props.profile._id}/following`}
          className={styles.following}
          style={{
            textDecoration: 'none',
            color: '#000', 
            transition: 'color 0.3s', 
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#6f7275'; 
            e.target.style.borderBottom = 'solid 1px #6f7275';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = 'none';
            e.target.style.color = '#000';
          }}
          >
          Following: {props.profile.following?.length} 
          </Link>
      </p>
      {props.profile?._id !== props.user?.profile &&
        <button onClick={handleClick}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      }
    </div>
  )
}

export default Following