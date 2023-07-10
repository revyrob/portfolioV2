import React from 'react'
import mountain from '../../assets/mountain.png';
import kayle from '../../assets/kayle.jpg';
import Nav from '../Nav/Nav';

function Banner({intro1, intro2}) {
  
  
  return (
    
    <section className=" bg-cover max-w-screen-xl m-auto " style={{backgroundImage: `url(${mountain})`}}>
        <Nav/>
        
        <div className='h-[600px] flex flex-col justify-evenly px-[20%] md:flex-row items-center '>
          <div>
        <h1 className='w-[10rem] md:text-2xl md:w-[20rem]'>{intro1}<br></br>
        <br></br>
       {intro2}</h1>
        </div>
        <div className=' flex-col md:flex-row md:items-center md:pl-[35%] '>
       <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-cover bg-center z-99999 " style={{backgroundImage: `url(${kayle})`}}></div>
       </div>
       </div>
    </section>
  )
}

export default Banner