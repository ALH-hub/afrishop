import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.css'; // Importer le fichier CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Tous les champs sont requis.');
      return;
    }
    setError('');
    // Logique de soumission ici
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1 className='login-title'>Connexion</h1>
        {error && <p className='login-error'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='login-input'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Mot de passe
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='login-input'
              required
            />
          </div>
          <button type='submit' className='login-button'>
            Se connecter
          </button>
          <div className='login-footer'>
            <p>
              Vous n avez pas de compte ?{' '}
              <a href='/register' className='text-blue-600 hover:underline'>
                Inscrivez-vous
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
