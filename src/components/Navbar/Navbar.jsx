import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default Navbar;
