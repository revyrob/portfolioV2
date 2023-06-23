import React from 'react'
import mountain from '../../assets/mountain.png';
import kayle from '../../assets/kayle.jpg';

function Banner() {
  return (
    
    <section className="h-[600px] bg-cover bg-center max-w-screen-xl m-auto flex items-center pl-[10%]" style={{backgroundImage: `url(${mountain})`}}>
        <div className=''>
        <h1 className='w-[10rem] md:text-2xl md:w-[20rem]'>Hello 👋 <br></br>
        <br></br>
        My name is Kayle Robson and I am a Front End Web Developer.  </h1>
        </div>
        <div className='flex-col md:flex-row md:items-center md:pl-[35%] mt-[50%]'>
       <img className="w-[300px] rounded-full " src={kayle} alt="kayle robson"/>
       </div>
    </section>
  )
}

export default Banner