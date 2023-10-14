import { useState } from "react";
const SearchPost = (props) => {
  const [formData,setFormData]=useState({query:''})
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (formData.query) {
      props.handlePostSearch(formData)
  }
}
  return (
    <form onSubmit={handleSubmit}
    className="search-form">
      <input
        type="text"
        name="query"
        autoComplete="off"
        value={formData.query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>

    </form>
  );
}

export default SearchPost