import React from 'react';
import Title from '../components/Title/Title';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import FellundFlauschigMockup from '../assets/FellundFlauschigMockup.png';

function FellundFlauschigPage() {
  return (
    <div>
      <Title title="Fell und Flauschig Fotografie Projekt" />
      <ProjectPage
        introducing="Im Rahmen meiner Weiterbildung bei Techstarter habe ich an einem Projekt teilgenommen, 
        das darauf abzielte, die Grundlagen von HTML und CSS zu erlernen. In einer Gruppenarbeit erstellten 
        wir anschließend eine Website nach dem Wasserfallprinzip. Die Website diente dazu erstmal einen Anfang in das Frontend Entwickeln zu bekommen."
        mockup={FellundFlauschigMockup}
        maintext="Die Website wird nicht mehr weiter verfolgt, da mein Wissenstand mittlerweile deutlich weiter ist, 
        weshalb ich diese Website als schönen Einstieg ins Frontend im Kopf behalten möchte."
        githublink="-"
      />
    </div>
  );
}

export default FellundFlauschigPage;
