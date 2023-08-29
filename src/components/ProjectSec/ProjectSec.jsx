import React from 'react'
import projects from '../../assets/data/projects.json';
import Projects from '../Projects/Projects';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectSec() {
    const listProjects = projects;

      
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: false
  });
  
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 }
  };

  return (
    <div className='bg-[#FFF2E2]'>
        <h1 className='text-4xl pt-[3%] flex justify-center items-center font-bold'>Projects</h1>
    {listProjects && listProjects.map((i) => (
      
        <motion.Projects key={listProjects.indexOf(i)} animate={inView ? "visible" : "hidden"}
        variants={variants}
        exit="hidden"
        transition={{ duration: 2 }}
        className="box"
        ref={ref} bgColor={i.bgColor} name={i.name} info={i.info} projectImg={i.projectImg} skills={i.skills} backend={i.backend} frontend={i.frontend} deployed={i.deployed} id={i.id} infoProject={i.infoProject} infoDevelopment={i.infoDevelopment} infoSolution={i.infoSolution}/>
        ))}
        
      
        </div>
  )
}

export default ProjectSec