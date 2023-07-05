import React from 'react'

function SmBall({imgSkill, imgSkillText}) {
  return (
     <div className='flex rounded-full border-2 border-grey-900 w-[75px] h-[75px] justify-center items-center bg-white mr-2'>
        <img className="w-[45px]" src={imgSkill} alt={imgSkillText}/>
    </div>
  )
}

export default SmBall