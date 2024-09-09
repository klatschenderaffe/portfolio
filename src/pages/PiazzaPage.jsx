import React from 'react';
import Title from '../components/Title/Title';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import PiazzaMockup from '../assets/PiazzaMockup.png';

function PiazzaPage() {
  return (
    <div>
      <Title title="Piazza Restaurant Website Projekt" />
      <ProjectPage
        introducing="Ein weiteres Projekt im Rahmen der Weiterbildung bei Techstarter bestand 
        darin, in einer Gruppenarbeit ein eigenes kleines Projekt zu entwickeln. Das Projekt 
        wurde nach dem Scrum-Framework durchgeführt, wobei wir die Rollen des Product Owners, 
        Scrum Masters und der Developer übernahmen. Wir entschieden uns, eine Website für ein Restaurant 
        für Menschen und ihre Vierbeiner zu programmieren. Dabei kamen HTML, CSS und JavaScript sowie 
        Git zum Einsatz."
        mockup={PiazzaMockup}
        maintext="Durch dieses Projekt bekam ich weiter Kenntnisse in HTML, CSS, JavaScript, Git sowie GitHub und Scrum"
        githublink="-"
      />
    </div>
  );
}

export default PiazzaPage;
