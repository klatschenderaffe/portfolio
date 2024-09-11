import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <li>
        <Link to="/impressum" className="link">
          Impressum
        </Link>
      </li>
    </footer>
  );
}

export default Footer;
