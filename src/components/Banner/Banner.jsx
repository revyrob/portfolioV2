import React from 'react'
import mountain from '../../assets/mountain.png';
import kayle from '../../assets/kayle.jpg';
import Nav from '../Nav/Nav';
import { motion } from "framer-motion";


function Banner({intro1, intro2}) {
  
  
  return (
    
    <section className=" bg-cover max-w-screen-2xl m-auto" style={{backgroundImage: `url(${mountain})`}}>
    <Nav/>
    
    <div className=' pt-[100px] md:pt-0 md:h-[900px] flex flex-col justify-evenly  md:flex-row items-center '>
    <div>
    <h1 className='w-[20rem] leading-10 md:text-2xl xl:w-[30rem] font-medium'>{intro2}</h1>
    </div>
    <div className=' flex-col md:flex-row md:items-center md:pl-[5%] '>
    <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 0.5,
      easeIn: [0, 0.3, 0.3, 1.01]
    }}
      >
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-cover bg-center z-99999 " style={{backgroundImage: `url(${kayle})`}}></div>
      </motion.div>
      <h1 className='text-center font-semibold md:text-2xl py-4 '>{intro1}</h1>
      
      </div>
      </div>
      </section>
      )
    }
    
    export default Banner