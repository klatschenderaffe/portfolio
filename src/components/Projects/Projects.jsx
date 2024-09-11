import './Projects.css';
import VanVentura from '../../assets/VanVentura.png';
import Piazza from '../../assets/Piazza.png';
import FundF from '../../assets/F&F.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="project" className="container-projects">
      <div className="projectsContainer">
        <ProjectCard
          src={VanVentura}
          link="/vanventura"
          h3="VanVentura"
          p="Camping App"
        />
        <ProjectCard
          src={Piazza}
          link="/piazza"
          h3="Piazza"
          p="Restaurant Website"
        />
        <ProjectCard
          src={FundF}
          link="/fellundflauschig"
          h3="Fell und Flauschig"
          p="Fotografen Website"
        />
      </div>
    </section>
  );
}

export default Projects;
