import React from 'react'

function SmBall({imgSkill, imgSkillText}) {
  return (
    <div className='rounded-full border-2 border-grey-800 w-[75px] h-[75px] flex justify-center items-center animate-wiggle'>
        <img className="w-[50px]" src={imgSkill} alt={imgSkillText}/>
    </div>
  )
}

export default SmBall