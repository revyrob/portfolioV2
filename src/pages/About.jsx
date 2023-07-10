import React from 'react';
import Banner from '../components/Banner/Banner';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Footer from '../components/Footer/Footer';
import introInfo from '../assets/data/intro.json'
import '../App.css'

function About() {
  return (
    <div className='font-sans tracking-wide'>
<Banner intro1={introInfo.about[0]} intro2={introInfo.about[1]}/>
<AboutInfo />
<Footer />
    </div>
  )
}

export default About