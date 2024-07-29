import React, { useState } from 'react';
import './stylerig.css';

const RegisterEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom de l'événement:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Heure:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Lieu:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Enregistrer l'événement</button>
    </form>
  );
};

export default RegisterEvent;