import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills">
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number">
                <h3>65%</h3>
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              className="path1"
              cx="80"
              cy="80"
              r="70"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h3 className="skillname">HTML</h3>
        {/* Second Skill */}
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number">
                <h3>30%</h3>
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
        <h3 className="skillname">JavaScript</h3>
      </div>
    </section>
  );
};

export default Skills;
