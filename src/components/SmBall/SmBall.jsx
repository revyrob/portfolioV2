import React from 'react'

function SmBall({imgSkill, imgSkillText}) {
  return (
    <div className='flex rounded-full border-2 border-grey-800 w-[75px] h-[75px] justify-center items-center'>
        <img className="w-[50px]" src={imgSkill} alt={imgSkillText}/>
    </div>
  )
}

export default SmBall