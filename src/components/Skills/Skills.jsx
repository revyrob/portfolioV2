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
    <section className='bg-[#7FBABB] min-h-[400px] w-full py-[2rem]'>
    <div className='bg-white rounded-lg min-h-[350px] w-3/4 m-auto relative'>
    <img src={ladySkills} alt='working woman with skills' className='invisible object-none lg:visible absolute pl-[2%] pt-[7%]' />
    <h1 className='text-4xl absolute pl-[15%] pt-[20%]'>Skills</h1>
   <div className='p-[2rem] m-auto min-h-[350px] py-auto  pl-[15%]'>
    <div className='z-10 flex flex-wrap justify-around px-[1rem] py-[2rem]'>
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