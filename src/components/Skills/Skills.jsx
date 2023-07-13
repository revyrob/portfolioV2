import React from 'react'
import SmBall from '../SmBall/SmBall';
import ladySkills from '../../assets/icons/workLady.png'
import skillsData from '../../assets/data/skills.json';

function Skills() {
 
  const skills = skillsData;
  

  return (
    <section className='bg-[#7FBABB] min-h-[400px] w-full py-[1rem] md:py-[2rem]'>
    <div className='bg-white rounded-lg min-h-[350px] w-[90%] md:w-3/4 m-auto ' style={{backgroundImage: `url(${ladySkills})`, backgroundRepeat:'no-repeat', backgroundPosition:"left", backgroundSize:"40%"}} >
    <h1 className='text-4xl pt-[3%] flex justify-center items-center font-bold'>Skills</h1>
   <div className='m-auto '>
    <div className='flex flex-wrap justify-evenly md:w-[70%] mx-auto px-[1rem] md:py-[2rem]'>
    {skills.map((i) => ( 
      <SmBall key={skills.indexOf(i)} imgSkill={i.img} imgSkillText={i.skill}/>
      ))}
      </div>
   
      </div>
        </div>
        
        </section>
        )
      }
      
      export default Skills