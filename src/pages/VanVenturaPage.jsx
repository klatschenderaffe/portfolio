import React from 'react';
import Title from '../components/Title/Title';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import VanVenturaMockup from '../assets/VanVenturaMockup.png';

function VanVenturaPage() {
  return (
    <div>
      <Title title="VanVentura Projekt" />
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
        maintext="Van Ventura ist eins meiner Herzens Projekte, welches ich auch vorhabe
          zu erweitern. Zum Beispiel soll auf dauer noch ein Blog abteil hinzu
          in welchem ich über meinen Van Ausbau berichte, sowie auch Tipps und
          Tricks zur Verfügung stelle."
        githublink="https://github.com/klatschenderaffe/VAN_VENTURA"
      />
    </div>
  );
}

export default VanVenturaPage;
