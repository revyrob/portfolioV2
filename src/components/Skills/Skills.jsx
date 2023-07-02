import React from 'react'
import SmBall from '../SmBall/SmBall';
import LgBall from '../LgBall/LgBall';
import ladySkills from '../../assets/icons/workLady.png'
import skillsData from '../../assets/data/skills.json';

function Skills() {

//if it is divisble by two than is will be mapped
const evenArray = skillsData.map((key, index) => {
   return ((index % 2 === 0) ? key : null) 
})
const oddArray = skillsData.map((key, index) => {
  return ((index % 2 !== 0) ? key : null) 
})
const smArray = evenArray.filter(i => i !== null)
const bgArray = oddArray.filter(j => j !== null)

console.log(smArray)
console.log(bgArray)
  return (
    <section className='bg-[#7FBABB] min-h-[400px] w-full py-[2rem] '>
        <div className='bg-white rounded-lg min-h-[350px] w-3/4 m-auto flex justify-center items-center '>
<img src={ladySkills} alt='working woman with skills' className='invisible object-none object-center lg:visible' />

{smArray.map((i) => ( 
              <SmBall imgSkill={i.img} imgSkillText={i.skill}/>
            ))}
{bgArray.map((i) => (
              <LgBall imgSkill={i.img} imgSkillText={i.skill}/>
            ))}
        
        </div>
        
    </section>
  )
}

export default Skills