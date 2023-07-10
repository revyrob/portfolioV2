import React from 'react'
import about from '../../assets/data/about.json';


function AboutInfo() {
    const data = about[0];
    console.log(data.text.text1)
  return (
    <section className='max-w-screen-xl m-auto '>
        <div className='leading-8 p-[2rem] lg:px-[4rem]'>
      
       <p>{data.text.text1}</p>
        <br/>
        <p>{data.text.text2}</p>
        <br/>
        <p>{data.text.text3}</p>
        <br/>
        <p>{data.text.text4}</p>
        </div>
        
        <div className='w-[100%] flex flex-wrap justify-evenly px-[10%]'>
        <img className="h-[350px] w-[350px] m-[2rem]" src={data.images.img1} alt=""/>
        <img className="h-[350px] w-[350px] m-[2rem]" src={data.images.img2} alt=""/>
        <img className="h-[350px] w-[350px] m-[2rem]" src={data.images.img3} alt=""/>
        </div>
        </section>
  )
}

export default AboutInfo