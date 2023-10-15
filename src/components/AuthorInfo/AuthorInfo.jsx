// components
import DateCard from '../DateCard/DateCard'

// css
import styles from './AuthorInfo.module.css'
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : <FontAwesomeIcon icon={faCircleUser} />

  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo
