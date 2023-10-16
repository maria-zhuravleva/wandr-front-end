// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './AuthorInfo.module.css'
//assets
import avatar from '../../assets/icons/avatar.png'

const AuthorInfo = ({ content }) => {
  const photo = content.author?.photo ? content.author?.photo : avatar

  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h4>{content.author?.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo
