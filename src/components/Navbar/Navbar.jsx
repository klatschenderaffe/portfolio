import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu from '../../assets/menue.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li className='link'>
          <Link to='hero' smooth={true} offset={-250} duration={500}>
            Startseite
          </Link>
        </li>
        <li className='link'>
          <Link to='project' smooth={true} offset={-290} duration={500}>
            Projekte
          </Link>
        </li>
        <li className='link'>
          <Link to='skills' smooth={true} offset={-250} duration={500}>
            Fähigkeiten
          </Link>
        </li>
      </ul>
      <img src={menu} alt='' className='menue-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
