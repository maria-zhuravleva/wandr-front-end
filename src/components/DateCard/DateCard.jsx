// components


// css
import styles from './DateCard.module.css'
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  const Calendar = <FontAwesomeIcon icon={faCalendarDays} />

  return (
    <div className={styles.dateContainer}>
      {Calendar}
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard
