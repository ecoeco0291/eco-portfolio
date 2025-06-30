import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Jerico Armendi</h1>
    <p>Student | Front End Developer </p>
    <nav>
      <Link to="/">About</Link> |{' '}
      <Link to="/projects">Projects</Link> |{' '}
      <Link to="/skills">Skills</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;