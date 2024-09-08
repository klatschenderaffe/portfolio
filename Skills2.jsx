import React from 'react';
import './Skills.css';
import SkillCircle from '../../common/SkillCircle';

function Skills() {
  return (
    <section id="skills" className="skills-container">
      <div className="skills">
        <SkillCircle h3="65%" skillname="HTML" />
        <SkillCircle h3="30%" skillname="JavaScript" />
      </div>
    </section>
  );
}

export default Skills;
