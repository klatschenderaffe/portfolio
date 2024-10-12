import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div className={`backbtn ${sticky ? 'dark-nav' : ''}`}>
      <li>
        <Link to='/' className='link'>
          Zurück zur Startseite
        </Link>
      </li>
    </div>
  );
}

export default BackButton;
