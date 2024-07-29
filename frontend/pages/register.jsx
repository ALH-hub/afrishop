import React, { useState } from 'react';
import './stylerig.css';
const RegisterForm = () => {
  const [userType, setUserType] = useState('user');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    businessName: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique pour soumettre le formulaire
    console.log('Submitted Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <label>
        Nom:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Mot de passe:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>
      
      {userType === 'seller' && (
        <>
          <label>
            Nom de l'entreprise:
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Adresse:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>
        </>
        
      )}
       <label>
        Type d'utilisateur:
        <select
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="user">Simple Utilisateur</option>
          <option value="seller">Vendeur</option>
        </select>
      </label>
      <button type="submit">S'enregistrer</button>
    </form>
  );
};

export default RegisterForm;
