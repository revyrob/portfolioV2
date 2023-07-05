import React from 'react'
import SmBall from '../SmBall/SmBall'

function Projects({bgColor, name, info, projectImg, skills, frontend, backend, deployed, id}) {
  return (
    <div id={id} className='min-h-[250px] w-full py-[2rem]' style={{backgroundColor : `${bgColor}` }} >
        <div className='max-w-screen-xl m-auto px-3 flex flex-col lg:flex-row md:justify-between'>
          <div className='lg:w-[65%]'>
          <h1 className='text-2xl'>{name}</h1>
          {deployed === "" ? null : (<p>🚀 <a href={`${deployed}`} >{deployed}</a></p>)}
          <p><a href={`${frontend}`} >Front-end</a> | { backend === "" ? null : (<a href={`${backend}`} >Back-end</a>)}</p>
          <p>{info}</p>
          <div className='flex py-3 justify-around lg:w-[75%] '>
                {skills.map((i) => (
                    <SmBall style={{backgroundColor: '#DFAF5E'}} className="bg-black" imgSkill={i.skillImg} imgSkillText={i.skillText}/>
                ))}
          </div>
          </div>
          <div className='flex justify-center align-middle' >
          <img  className="pl-3 h-[300px]" src={projectImg} alt={name}/>
          </div>
        </div>
    </div>
  )
}

export default Projects