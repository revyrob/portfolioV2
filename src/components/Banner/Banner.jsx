import React from 'react'
import mountain from '../../assets/mountain.png';
import kayle from '../../assets/kayle.jpg';
import Nav from '../Nav/Nav';

function Banner() {
  return (
    
    <section className=" bg-cover max-w-screen-xl m-auto " style={{backgroundImage: `url(${mountain})`}}>
        <Nav/>
        
        <div className='h-[600px] flex items-center pl-[10%]'>
          <div>
        <h1 className='w-[10rem] md:text-2xl md:w-[20rem]'>Hello 👋 <br></br>
        <br></br>
        My name is Kayle Robson and I am a Front End Web Developer.  </h1>
        </div>
        <div className='flex-col md:flex-row md:items-center md:pl-[35%] mt-[50%]'>
       <div className="w-[300px] h-[300px] rounded-full bg-cover bg-center" style={{backgroundImage: `url(${kayle})`}}></div>
       </div>
       </div>
    </section>
  )
}

export default Banner