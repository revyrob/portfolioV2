import React from 'react'
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'
import introInfo from '../assets/data/intro.json'
import ProjectSec from '../components/ProjectSec/ProjectSec'
// import { useRef, useState } from 'react'


function Landing() { 
  
  // //useRefs
  // const containerRef = useRef(null)
  // const [isVisible, setIsVisible] = useState(false);
  
  
  
  // useEffect(() => {
  //   //observe entries
  //   console.log('myRef', containerRef.current)
  // }, [])
  
  
  
  return (
    <div className='font-mono tracking-wide'>
    <Banner intro1={introInfo.intro[0]} intro2={introInfo.intro[1]}/>
  
    
   <ProjectSec/>
      <Footer />
      </div>
      )
    }
    
    export default Landing