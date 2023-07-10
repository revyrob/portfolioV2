import React from 'react'
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import projects from '../assets/data/projects.json';

function Landing() { 
    const listProjects = projects;
  return (
    <>
    <Banner />
    <Skills />
    {listProjects && listProjects.map((i) => (
      <Projects key={listProjects.indexOf(i)} bgColor={i.bgColor} name={i.name} info={i.info} projectImg={i.projectImg} skills={i.skills} backend={i.backend} frontend={i.frontend} deployed={i.deployed} id={i.id}/>
    ))}
    <Footer/>
    </>
  )
}

export default Landing