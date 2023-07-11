import React from 'react'
import SmBall from '../SmBall/SmBall';
//import './Projects.scss'

function Projects({bgColor, name, info, projectImg, skills, frontend, backend, deployed, id}) {
  // //observe entries
  // const observer = new IntersectionObserver ((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry)
  //     if(entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //     }else {
  //       entry.target.classList.remove('show')
  //     }
  //   });
  // });

  // //observe all hidden elements
  // const hiddenElements = document.querySelectorAll('.hidden');
  // hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div id={id} className='min-h-[250px] w-full py-[2rem] ' style={{backgroundColor : `${bgColor}` }} >
        <div className='max-w-screen-xl m-auto px-3 flex flex-col lg:flex-row md:justify-between'>
          <div className='lg:w-[65%]'>
          <h1 className='text-2xl pb-3'>{name}</h1>
          {deployed === "" ? null : (<p className='py-3 text-[#cc1753]'>🚀 <a href={`${deployed}`} >{deployed}</a></p>)}
          <p ><a className='bg-[#7fbabb91] hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow' href={`${frontend}`} >Front-end</a> { backend === "" ? null : (<a  className='bg-[#7fbabb91] hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow' href={`${backend}`} > Back-end</a>)}</p>
          <p className='py-3 leading-8'>{info}</p>
          <div className='flex py-3 justify-around lg:w-[75%]'>
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
  )
}

export default Projects