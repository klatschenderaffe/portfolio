import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Title from './components/Title/Title';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title title="Projekte" />
      <Projects />
      <Title title="Fähigkeiten" />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
