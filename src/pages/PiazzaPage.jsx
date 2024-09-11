import React from 'react';
import Title from '../components/Title/Title';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import PiazzaMockup from '../assets/PiazzaMockup.png';
import BackButton from '../components/BackButton/BackButton';

function PiazzaPage() {
  return (
    <div>
      <BackButton />
      <Title title="Piazza Restaurant Website" subtitle="Projekt" />
      <ProjectPage
        introducing="Im Rahmen der Weiterbildung bei Techstarter wurde ein weiteres Projekt durchgeführt, 
        bei dem wir in Gruppenarbeit ein eigenständiges Projekt entwickelten. Dieses Projekt wurde nach dem Scrum-Framework 
        umgesetzt, wobei wir die Rollen des Product Owners, Scrum Masters und der Entwickler übernahmen. Wir entschieden uns, 
        eine Website für ein Restaurant zu erstellen, das sowohl Menschen als auch ihre Haustiere anspricht."
        mockup={PiazzaMockup}
        maintext="In diesem Projekt fungierte ich als einer von zwei Entwicklern. Wir begannen mit der Erstellung grober Designentwürfe 
        und ließen geeignete Bilder für unsere Website anfertigen. Die Website bestand aus einer Startseite, einer Seite mit der Speisekarte 
        und einem Veranstaltungskalender für Hundebesitzer. Während des Projekts vertieften wir unser Verständnis des SCRUM-Frameworks
        und erweiterten unsere Kenntnisse in JavaScript, HTML, CSS und Git."
        githublink="https://github.com/Dilara-ux/Piazza"
      />
    </div>
  );
}

export default PiazzaPage;
