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
    <img src={ladySkills} alt='working woman with skills' className='z-0 absolute inset-0 invisible object-none lg:visible mx-auto pt-[5%]' />
    <div className='p-[2rem] m-auto h-[80%]'>
    <div className=' flex justify-between items-center px-[1rem]'>
    {smArray.map((i) => ( 
      <SmBall imgSkill={i.img} imgSkillText={i.skill}/>
      ))}
      </div>
      <div className=' flex justify-evenly items-center x'>
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