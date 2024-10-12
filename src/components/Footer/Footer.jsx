import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <li className='link'>
        <Link to='/impressum'>Impressum</Link>
      </li>
    </footer>
  );
}

export default Footer;
