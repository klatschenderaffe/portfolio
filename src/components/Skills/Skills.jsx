import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

const Skills = () => {
  return (
    <section className='skills'>
      <div className='skill '>
        <CircularProgressbar
          value={90}
          text='90%'
          styles={buildStyles({
            textColor: '#ddc1a7',
            textSize: '16px',
            pathColor: '#a2ae52',
            trailColor: '#433831',
          })}
          className='progressCircle'
        />
        <h3>HTML</h3>
      </div>
      <div className='skill'>
        <CircularProgressbar
          value={30}
          text='30%'
          styles={buildStyles({
            textColor: '#ddc1a7',
            textSize: '16px',
            pathColor: '#a2ae52',
            trailColor: '#433831',
          })}
          className='progressCircle'
        />
        <h3>JavaScript</h3>
      </div>

      <div className='skill'>
        <CircularProgressbar
          value={65}
          text='65%'
          styles={buildStyles({
            textColor: '#ddc1a7',
            textSize: '16px',
            pathColor: '#a2ae52',
            trailColor: '#433831',
          })}
          className='progressCircle'
        />
        <h3>CSS</h3>
      </div>
      <div className='skill'>
        <CircularProgressbar
          value={50}
          text='50%'
          styles={buildStyles({
            textColor: '#ddc1a7',
            textSize: '16px',
            pathColor: '#a2ae52',
            trailColor: '#433831',
          })}
          className='progressCircle'
        />
        <h3>React</h3>
      </div>
    </section>
  );
};

export default Skills;
