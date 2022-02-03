import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  return (
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to={`/users/:id`}>Profil</Link>
      </nav>
  )
}

export default Nav;
