// Error.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/error.css';

const Error = () => {
  return (
    <div className='errorPage'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default Error;
