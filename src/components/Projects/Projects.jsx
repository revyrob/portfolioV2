import React from 'react'
import SmBall from '../SmBall/SmBall';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects({bgColor, name, infoProject, infoDevelopment, infoSolution, projectImg, skills, frontend, backend, deployed, id}) {
        
  const [ref, inView] = useInView({
    threshold: .1,
    triggerOnce: true
  });
  
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.75 }
  };

  return (
    <motion.div
    animate={inView ? "visible" : "hidden"}
    variants={variants}
    exit="hidden"
    transition={{ duration: 2 }}
    className="box"
    ref={ref}>
    
    <div id={id} className='min-h-[250px] w-full p-[2rem]' style={{backgroundColor : `${bgColor}` }} >
    
        <div className='max-w-screen-xl m-auto flex flex-col lg:flex-row md:justify-between animate-marquee2'>
          <div className='lg:w-[65%]'>
          <h1 className='text-2xl pb-3'>{name}</h1>
          {deployed === "" ? null : (<p className='py-3 text-[#cc1753]'>🚀 <a href={`${deployed}`} >{deployed}</a></p>)}
          <p ><a className='bg-[#7fbabb91] hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow' href={`${frontend}`} >Front-end</a> { backend === "" ? null : (<a  className='bg-[#7fbabb91] hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow' href={`${backend}`} > Back-end</a>)}</p>
          <p className='py-3 leading-8'>{infoProject}</p>
          <p className='py-3 leading-8'>{infoDevelopment}</p>
          <p className='py-3 leading-8'>{infoSolution}</p>
          <div className='flex md:py-3 justify-around flex-wrap'>
            <p className='flex justify-center item-center'>Built with ➡️</p>
                {skills.map((i) => (
                    <SmBall key={skills.indexOf(i)} style={{backgroundColor: '#DFAF5E'}} className="bg-black" imgSkill={i.skillImg} imgSkillText={i.skillText}/>
                ))}
          </div>
          </div>
          <div className='flex justify-center items-center w-[90%] lg:w-[45%] my-auto ' >
          <img  className="pl-3 lg:h-[300px]" src={projectImg} alt={name}/>
          </div>
        </div>
        
    </div> 
    </motion.div>
  )
}

export default Projects