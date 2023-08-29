import React from 'react'
import mountain from '../../assets/mountain.png';
import kayle from '../../assets/kayle.jpg';
import Nav from '../Nav/Nav';
import { motion } from "framer-motion";


function Banner({intro1, intro2}) {
  
  
  return (
    
    <section className=" bg-cover max-w-screen-2xl m-auto" style={{backgroundImage: `url(${mountain})`}}>
    <Nav/>
    
    <div className='h-[600px] pt-[90px] md:pt-0 md:h-[900px] flex flex-col justify-evenly px-[20%] md:flex-row items-center '>
    <div>
    <h1 className='w-[20rem] md:text-2xl xl:w-[30rem] font-medium'>{intro2}</h1><br></br>
    <br></br>
    </div>
    <div className=' flex-col md:flex-row md:items-center md:pl-[35%] '>
    <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
      >
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-cover bg-center z-99999 " style={{backgroundImage: `url(${kayle})`}}></div>
      </motion.div>
      <h1 className='text-center font-semibold md:text-2xl'>{intro1}</h1>
      
      </div>
      </div>
      </section>
      )
    }
    
    export default Banner