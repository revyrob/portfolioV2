import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import introInfo from '../assets/data/intro.json'
import ProjectSec from '../components/ProjectSec/ProjectSec'


function Landing() { 

  
  
  return (
    <div className='font-mono tracking-wide'>
    <Banner intro1={introInfo.intro[0]} intro2={introInfo.intro[1]}/>
  
    
   <ProjectSec>
  
      </ProjectSec>
      <Footer />
      </div>
      )
    }
    
    export default Landing