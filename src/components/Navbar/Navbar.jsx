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
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={-250}
            duration={500}
            className="link"
          >
            Startseite
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            offset={-250}
            duration={500}
            className="link"
          >
            Projekte
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            offset={-250}
            duration={500}
            className="link"
          >
            Fähigkeiten
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menue-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
