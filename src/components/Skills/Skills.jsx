import React from 'react'
import skills from '../../assets/skills.png';
import SmBall from '../SmBall/SmBall';
import LgBall from '../LgBall/LgBall';

function Skills() {
  return (
    <section className='bg-[#7FBABB] min-h-[400px] w-full py-[2rem]'>
        <div className='bg-white rounded-lg min-h-[350px] w-3/4 m-auto flex justify-center items-center'>
<img src={skills} alt='working woman with skills' className='object-none object-center' />
<SmBall/>
        <LgBall/>
        </div>
        
    </section>
  )
}

export default Skills