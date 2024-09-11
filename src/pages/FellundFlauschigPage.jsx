import React from 'react';
import Title from '../components/Title/Title';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import FellundFlauschigMockup from '../assets/FellundFlauschigMockup.png';
import BackButton from '../components/BackButton/BackButton';

function FellundFlauschigPage() {
  return (
    <div>
      <BackButton />
      <Title title="Fell und Flauschig Fotografie" subtitle="Projekt" />
      <ProjectPage
        introducing="Im Rahmen meiner Weiterbildung bei Techstarter habe ich an einem Projekt teilgenommen, 
        das darauf abzielte, die Grundlagen von HTML und CSS zu erlernen. In einer Gruppenarbeit erstellten 
        wir anschließend eine Website nach dem Wasserfallprinzip. Die Website diente dazu erstmal einen Anfang in das Frontend zu bekommen."
        mockup={FellundFlauschigMockup}
        maintext="In unserer Gruppe herrschte eine große Tierliebe, was die Themenfindung für dieses Projekt erleichterte. 
        Wir begannen damit, in Figma eine Vorlage zu erstellen. Uns wurde ausdrücklich mitgeteilt, dass diese Vorlage später 
        nicht mehr verändert werden darf, da wir nach dem Wasserfallprinzip arbeiteten. Nach der Fertigstellung der Vorlage teilten 
        wir die Aufgaben untereinander auf. Meine Aufgabe bestand darin, die Startseite zu gestalten. Durch dieses Projekt konnte ich erste 
        Erfahrungen mit HTML und CSS sammeln und das Wasserfallprinzip kennenlernen."
        githublink="https://github.com/klatschenderaffe/FellundFlauschig"
      />
    </div>
  );
}

export default FellundFlauschigPage;
