import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skill ">
        <CircularProgressbar
          value={90}
          text="90%"
          styles={buildStyles({
            textColor: '#fff',
            textSize: '16px',
            pathColor: '#136779',
            trailColor: '#222',
          })}
          className="progressCircle"
        />
        <h3>HTML</h3>
      </div>
      <div className="skill">
        <CircularProgressbar
          value={30}
          text="30%"
          styles={buildStyles({
            textColor: '#fff',
            textSize: '16px',
            pathColor: '#136779',
            trailColor: '#222',
          })}
          className="progressCircle"
        />
        <h3>JavaScript</h3>
      </div>

      <div className="skill">
        <CircularProgressbar
          value={70}
          text="70%"
          styles={buildStyles({
            textColor: '#fff',
            textSize: '16px',
            pathColor: '#136779',
            trailColor: '#222',
          })}
          className="progressCircle"
        />
        <h3>CSS</h3>
      </div>
      <div className="skill">
        <CircularProgressbar
          value={50}
          text="50%"
          styles={buildStyles({
            textColor: '#fff',
            textSize: '16px',
            pathColor: '#136779',
            trailColor: '#222',
          })}
          className="progressCircle"
        />
        <h3>React</h3>
      </div>
    </section>
  );
};

export default Skills;
