import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function ProjectCard({ src, link, h3, p }) {
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <Link to={link} offset={0} duration={800} onClick={scrollToTop}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </Link>
  );
}

export default ProjectCard;
