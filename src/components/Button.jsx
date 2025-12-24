import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ to, children }) {
  return (
    <Link to={to} className="btn">
      {children}
    </Link>
  );
}

export default Button;