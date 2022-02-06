import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [ formData, setFromData] = useState({
    name: '',
    image: '',
  });

  function handleSubmit (e) {
    e.preventDefault();

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        likes: 0,
      }),
    })
    .then(r => r.json())
    .then(newToy => onAddToy(newToy));

    setFromData({
      name: '',
      image: '',  
    })
  }

  function handleChange (e) {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = { handleSubmit }>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value = { formData.name }
          className="input-text"
          onChange = { handleChange }
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value = { formData.image }
          className="input-text"
          onChange = { handleChange }
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
