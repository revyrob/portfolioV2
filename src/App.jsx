import "./App.css";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import projects from './assets/data/projects.json';
import Footer from "./components/Footer/Footer";

function App() {

  const listProjects = projects;
  return (
    <>
     
      <Banner />
      <Skills />
      {listProjects && listProjects.map((i) => (
        <Projects bgColor={i.bgColor} name={i.name} info={i.info} projectImg={i.projectImg} skills={i.skills} backend={i.backend} frontend={i.frontend} deployed={i.deployed} id={i.id}/>
      ))}
      <Footer/>
    </>
  );
}

export default App;
