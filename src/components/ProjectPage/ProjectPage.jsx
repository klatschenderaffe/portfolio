import React from 'react';
import './ProjectPage.css';
import github from '../../assets/github.png';

function ProjectPage({ introducing, mockup, maintext, githublink, skills }) {
  return (
    <>
      <div className="ProductPage-Container">
        <p>{introducing}</p>
        <div>
          <img src={mockup} alt="" className="bild" />
        </div>
        <p>{maintext}</p>
        <h3>Hier gehts zum GitHub Repository</h3>
        <a href={githublink} target="blank">
          {' '}
          <img src={github} alt="GitHub Icon" />
        </a>
      </div>
    </>
  );
}

export default ProjectPage;
