import './Hero.css';
import heroImg from '../../assets/heroImg.png';
import LinkedInIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import CV from '../../assets/Lebenslauf.pdf';

function Hero() {
  return (
    <section id='hero' className='container-hero'>
      <div>
        <img className='hero' src={heroImg} alt='Profile Picture' />
      </div>
      <div className='info'>
        <h1>
          Pia <br />
          Heiß
        </h1>
        <h2>Full-Stack-Entwicklerin</h2>
        <span>
          <a
            href='https://www.linkedin.com/in/pia-hei%C3%9F-9a8259138/'
            target='_blank'
          >
            {' '}
            <img src={LinkedInIcon} alt='' />
          </a>
          <a href='https://github.com/klatschenderaffe' target='_blank'>
            {' '}
            <img src={GithubIcon} alt='' />
          </a>
        </span>
        <p className='description'>
          Ich entwickle digitale Lösungen, die Frontend-Ästhetik und
          Backend-Performance nahtlos vereinen.
        </p>
        <a href={CV} download>
          <button className='hover'>Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
