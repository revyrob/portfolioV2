import React from 'react'
import SmBall from '../SmBall/SmBall'

function Projects({bgColor, name, info, projectImg, skills}) {
  return (
    <div className='min-h-[250px] w-full py-[2rem]' style={{backgroundColor : `${bgColor}` }} >
        <div className='max-w-screen-xl m-auto'>
    <h1>{name}</h1>
    <p>{info}</p>
    {skills.map((i) => (
            <SmBall imgSkill={i.skillImg} imgSkillText={i.skillText}/>
    ))}
   
    <img src={projectImg} alt={name}/>
    </div>
    </div>
  )
}

export default Projects