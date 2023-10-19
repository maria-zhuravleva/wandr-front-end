// npm modules
import { useState } from 'react'

// css
import styles from './RecCard.module.css'

// components
import EditRec from '../EditRec/EditRec'

const RecCard = (props) => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleHideForm = () => {
    setShowForm(false)
  }

  return ( 
    <div className={styles.recCardContainer}>
      <h2>Recommendation:</h2>
      <h4> <span>Name: </span>{props.recommendation.name}</h4>
      <p> <span>Activity:  </span>{props.recommendation.activity}</p>
      <p> <span>How Long:  </span>{props.recommendation.time}</p>
      <p> <span>Rating:  </span>{props.recommendation.rating}</p>
      <p> <span>Description:  </span>{props.recommendation.text}</p>

      <div className={styles.recButtons}>
        {props.author?._id === props.user?.profile && <button onClick={() => handleShowForm()}>Edit</button>}
        {props.author?._id === props.user?.profile && (
          <button onClick={() => props.handleDeleteRec(props.recommendation._id)}>Delete</button>
        )}
      </div>

      <div>
      {showForm && <EditRec recommendation={props.recommendation} handleEditRec={props.handleEditRec} handleHideForm={handleHideForm}/>}
    </div>
    </div>
  )
}

export default RecCard