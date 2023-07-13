import React, { useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import projects from '../assets/data/projects.json';
import introInfo from '../assets/data/intro.json'
// import { useRef, useState } from 'react'


function Landing() { 
  const listProjects = projects;
  
  // //useRefs
  // const containerRef = useRef(null)
  // const [isVisible, setIsVisible] = useState(false);
  
  
  
  // useEffect(() => {
  //   //observe entries
  //   console.log('myRef', containerRef.current)
  // }, [])
  
  
  
  return (
    <div className='font-sans tracking-wide'>
    <Banner intro1={introInfo.intro[0]} intro2={introInfo.intro[1]}/>
    <Skills  />
    {listProjects && listProjects.map((i) => (
      <Projects   key={listProjects.indexOf(i)} bgColor={i.bgColor} name={i.name} info={i.info} projectImg={i.projectImg} skills={i.skills} backend={i.backend} frontend={i.frontend} deployed={i.deployed} id={i.id} infoProject={i.infoProject} infoDevelopment={i.infoDevelopment} infoSolution={i.infoSolution}/>
      ))}
      <Footer />
      </div>
      )
    }
    
    export default Landing