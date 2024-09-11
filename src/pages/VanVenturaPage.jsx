import React from 'react';
import Title from '../components/Title/Title';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import VanVenturaMockup from '../assets/VanVenturaMockup.png';
import BackButton from '../components/BackButton/BackButton';

function VanVenturaPage() {
  return (
    <div>
      <BackButton />
      <Title title="VanVentura" subtitle="Projekt" />
      <ProjectPage
        introducing="Van Ventura war ein Projekt innerhalb meiner Weiterbildung bei
          Techstarter. Wir haben uns in Gruppen aufgeteilt und anschließend
          überlegt was wir denn als Projekt machen könnten. Schließlich kamen
          wir darauf, dass wir doch eine Website für Camper entwickeln könnten,
          welche einen Stellplatz sucher, sowie auch die Regeln für die
          passenden Länder in dem jeweiligen Land vereinen. Wir wollten die
          Website möglichst Zeitlos und einfach gestalten. Sie sollte simple
          aber dennoch ansprechend aussehen."
        mockup={VanVenturaMockup}
        maintext="Van Ventura ist eines meiner Herzensprojekte, das ich weiter 
        ausbauen möchte. Geplant ist die Integration eines Blog-Bereichs, in dem ich über den Ausbau 
        meines Vans berichte und Tipps sowie Tricks zur Verfügung stelle."
        githublink="https://github.com/klatschenderaffe/VAN_VENTURA"
      />
    </div>
  );
}

export default VanVenturaPage;
