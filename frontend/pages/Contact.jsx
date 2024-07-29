// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ContactUs.css'; // Si tu as des styles CSS spécifiques pour cette page

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer le formulaire
    alert('Formulaire soumis avec succès !');
    // Réinitialiser le formulaire après soumission (si nécessaire)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className='contact-us-container'>
      <div className='contact-us-header'>
        <h1>Contact Us</h1>
        <p>
          We are here to answer any questions you may have. Fill out the form
          below or use the contact information to reach us.
        </p>
      </div>

      <div className='contact-us-content'>
        <div className='contact-us-form-container'>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit} className='contact-us-form'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='contact-us-input'
              required
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='contact-us-input'
              required
            />

            <label htmlFor='subject'>Subject:</label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='contact-us-input'
              required
            />

            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='contact-us-textarea'
              required
            ></textarea>

            <button type='submit' className='contact-us-button'>
              Send
            </button>
          </form>
        </div>

        <div className='contact-us-info'>
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 123 street of Commerce, Douala, Cameroon
          </p>
          <p>
            <strong>Phone:</strong> +237 620 45 67 89
          </p>
          <p>
            <strong>Email:</strong> contact@artishop.com
          </p>
          <p>
            <strong>Working Hours:</strong> Monday - Friday: 9am - 6pm
          </p>

          <div className='contact-us-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.36852607996!2d9.693055!3d4.0510565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105fc1d1f64b6795%3A0x31691c4b3174ea51!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1635972914880!5m2!1sen!2sus'
              title='Google Map'
              width='100%'
              height='300'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
