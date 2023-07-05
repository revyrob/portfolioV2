import React from 'react'

function LgBall({imgSkill, imgSkillText}) {
  return (
    <div className='rounded-full border-2 border-grey-800 w-[95px] h-[95px] flex justify-center items-center mr-2'>
<img className="w-[50px]" src={imgSkill} alt={imgSkillText}/>
</div>   


  )
}

export default LgBall