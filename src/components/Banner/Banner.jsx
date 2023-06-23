import React from 'react'
import mountain from '../../assets/mountain.png';

function Banner() {
  return (
    
    <section className="h-[600px] bg-cover bg-center max-w-screen-xl m-auto" style={{backgroundImage: `url(${mountain})`}}>
        <h1>Hello 👋 <br></br>
        My name is Kayle Robson and I am a Front End Web Developer.  </h1>
       
    </section>
  )
}

export default Banner