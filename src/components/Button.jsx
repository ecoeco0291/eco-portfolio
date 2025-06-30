import React from 'react';
import './Button.css';

const Button = ({ text, onClick, href }) => {
  return href ? (
    <a href={href} className="custom-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;