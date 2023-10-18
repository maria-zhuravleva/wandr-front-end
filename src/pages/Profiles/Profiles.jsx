// npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// services
import * as profileService from '../../services/profileService'
// css
import styles from './Profiles.module.css'
import avatar from "../../assets/icons/avatar.png"
import community from "../../assets/img/community.jpg"
// pages
import ProfilePage from '../ProfilePage/ProfilePage'
const Profiles = (props) => {

  if (!props.profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  return (
    <div className={styles.allProfilesContainer}>
      <div className={styles.allProfilesLines}>
        <hr className={styles.allProfilesLine} />
        <h1>Our Travel Community</h1>
        <hr className={styles.allProfilesLine} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.namesContainer}>
          <h3>Wanderers</h3>
          {props.profiles.map(profile => (
            <Link key={profile._id} to={`/profiles/${profile._id}`}>
              {profile.photo ? (
                <img src={profile.photo} alt="profile image" />
              ) : (
                <img src={avatar} alt="avatar" />
              )}
              <p>{profile.name}</p>
            </Link>
          ))}
        </div>
        <div className={styles.communityImg}>
          <img src={community} alt="avatar" />
        </div>
      </div>
    </div>
  )
}
export default Profiles
