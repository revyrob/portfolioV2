import React from 'react'
import projects from '../../assets/data/projects.json';
import Projects from '../Projects/Projects';


function ProjectSec() {
    const listProjects = projects;



  return (
    <div className='bg-[#FFF2E2]'>
        <h1 className='text-4xl pt-[3%] flex justify-center items-center font-bold'>Projects</h1>
        
    {listProjects && listProjects.map((i) => (
       
        <Projects key={listProjects.indexOf(i)} bgColor={i.bgColor} name={i.name} info={i.info} projectImg={i.projectImg} skills={i.skills} backend={i.backend} frontend={i.frontend} deployed={i.deployed} id={i.id} infoProject={i.infoProject} infoDevelopment={i.infoDevelopment} infoSolution={i.infoSolution}/>
      
        ))}
        
      
        </div>
  )
}

export default ProjectSec