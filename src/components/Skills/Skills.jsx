import React, { useEffect } from 'react'
import SmBall from '../SmBall/SmBall';
import LgBall from '../LgBall/LgBall';
import ladySkills from '../../assets/icons/workLady.png'
import skillsData from '../../assets/data/skills.json';
import { useState } from 'react';

function Skills() {
const [skills, setSkills] = useState(skillsData);

useEffect(() => {
  setSkills(skills)
}, []);

  return (
    <section className='bg-[#7FBABB] min-h-[400px] w-full py-[2rem]'>
        <div className='bg-white rounded-lg min-h-[350px] w-3/4 m-auto flex justify-center items-center'>
<img src={ladySkills} alt='working woman with skills' className='invisible object-none object-center lg:visible' />

{skills.map((i) => (
              <SmBall imgSkill={i.img} imgSkillText={i.skill}/>
            ))}
        <LgBall/>
        </div>
        
    </section>
  )
}

export default Skills