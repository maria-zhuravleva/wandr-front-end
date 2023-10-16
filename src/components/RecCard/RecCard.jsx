// npm modules
import { useState } from 'react'

// css
// import styles from './RecCard.module.css'

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
    <>
      <h4>{props.recommendation.name}</h4>
      <p>{props.recommendation.activity}</p>
      <p>{props.recommendation.time}</p>
      <p>{props.recommendation.rating}/5</p>
      <p>{props.recommendation.text}</p>

      <div>
      {props.author._id === props.user.profile && <button onClick={() => handleShowForm()}>Edit</button>}
      {props.author._id === props.user.profile && (
        <button onClick={() => props.handleDeleteRec(props.recommendation._id)}>Delete</button>
      )}
        </div>

        <div>
      {showForm && <EditRec recommendation={props.recommendation} handleEditRec={props.handleEditRec} handleHideForm={handleHideForm}/>}
    </div>
    </>
  )
}

export default RecCard