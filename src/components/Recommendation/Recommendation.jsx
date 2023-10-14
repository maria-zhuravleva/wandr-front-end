// npm modules
import { useState } from "react"

const Recommendation = (props) => {

  const [recommendation, setRecommendation] = useState({
    activityName: '',
    time: '30 min',
    rating: 5,
  })

  const handleChange = (e) => {
    setRecommendation({...recommendation, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddRecommendation(recommendation)
  }

  return (  
    <>
      <p>This is a Recommendation</p>
      {/* put recommendation form here */}
      <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activityName-input">Activity:</label>
        <select
          required
          // type="text"
          name="activityName"
          id="activityName-input"
          value={recommendation.activityName}
          // placeholder="Activity"
          onChange={handleChange}
        >
          <option value="">Select an Activity</option>
          <option value="Hiking">Hiking</option>
          <option value="Star Gazing">Star Gazing</option>
          <option value="Cycling & Mountain Biking">Cycling & Mountain Biking</option>
          <option value="Whitewater Rafting">Whitewater Rafting</option>
          <option value="Camping">Camping</option>
        </select>
        <label htmlFor="time-input">How Long:</label>
        <select
          required
          // type="Number"
          name="time"
          id="time-input"
          value={recommendation.time}
          // placeholder="Timing"
          onChange={handleChange}
        >
          <option value="30 min">30 min</option>
          <option value="1 hour">1 hour</option>
          <option value="Several Hours">Several Hours</option>
          <option value="All Day">All Day</option>
          <option value="Weekend Trip">Weekend Trip</option>
        </select>
        <label htmlFor="rating-input">Rating:</label>
        <input
          required
          type="number"
          name="rating"
          id="rating-input"
          value={recommendation.rating}
          min="1"
          max="5"
          placeholder="Rating"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
    </>
  )
}

export default Recommendation