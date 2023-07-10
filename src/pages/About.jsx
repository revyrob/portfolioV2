import React from 'react';
import Banner from '../components/Banner/Banner';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Footer from '../components/Footer/Footer';
import introInfo from '../assets/data/intro.json'

function About() {
 console.log(introInfo)
  return (
    <>
<Banner />
<AboutInfo />
<Footer />
    </>
  )
}

export default About