import React from 'react'
import SmBall from '../SmBall/SmBall';
import LgBall from '../LgBall/LgBall';
import ladySkills from '../../assets/icons/workLady.png'
import skillsData from '../../assets/data/skills.json';

function Skills() {
  
  //if it is divisble by two than it is in a small ball
  const evenArray = skillsData.map((key, index) => {
    return ((index % 2 === 0) ? key : null) 
  })
  //if it is NOT divisble by two than it is in a big ball
  const oddArray = skillsData.map((key, index) => {
    return ((index % 2 !== 0) ? key : null) 
  })
  //filt out null from both arrays or objects
  const smArray = evenArray.filter(i => i !== null)
  const bgArray = oddArray.filter(j => j !== null)
  
  return (
    <section className='bg-[#7FBABB] min-h-[400px] w-full py-[1rem] md:py-[2rem]'>
    <div className='bg-white rounded-lg min-h-[350px] w-[90%] md:w-3/4 m-auto relative'>
    <img src={ladySkills} alt='working woman with skills' className='invisible z-0 object-none lg:visible absolute pl-[2%] pt-[7%]' />
    <h1 className='text-4xl pt-3 static lg:pl-[15%] xl:pt-[10%] xl:absolute '>Skills</h1>
   <div className='lg:p-[2rem] m-auto min-h-[350px] lg:py-auto lg:pl-[15%] p-0'>
    <div className='z-999 flex flex-wrap justify-around px-[1rem] py-[2rem]'>
    {smArray.map((i) => ( 
      <SmBall imgSkill={i.img} imgSkillText={i.skill}/>
      ))}
      </div>
      <div className=' z-999 flex flex-wrap justify-evenly pt-[4rem]'>
      {bgArray.map((i) => (
        <LgBall imgSkill={i.img} imgSkillText={i.skill}/>
        ))}
        </div>
      </div>
        </div>
        
        </section>
        )
      }
      
      export default Skills