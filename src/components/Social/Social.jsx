import React from 'react'
import instagram from '../../assets/icons/icon-instagram.png';
import linked from '../../assets/icons/icon-linkedin.png';
import mail from '../../assets/icons/mail-icon.svg';
import github from '../../assets/icons/github.svg';

function Social() {
    return (
        <div className='flex w-[300px] justify-evenly align-middle'>
        <a href="https://linkedin.com/in/kayle-robson "><div className=" bg-cover h-[30px] w-[30px] md:h-[50px] md:w-[50px] " style={{backgroundImage: `url(${linked})`}}></div></a>
        <a href="https://github.com/revyrob"><div className=" bg-cover h-[30px] w-[30px] md:h-[50px] md:w-[50px] " style={{backgroundImage: `url(${github})`}}></div></a>
        <a href="mailto:kayle.robson@gmail.com"><div className=" bg-cover h-[30px] w-[30px] md:h-[50px] md:w-[50px] " style={{backgroundImage: `url(${mail})`}}></div></a>
        <a href="https://www.instagram.com/klee.robby/"><div className=" bg-cover h-[30px] w-[30px] md:h-[50px] md:w-[50px] " style={{backgroundImage: `url(${instagram})`}}></div></a>
        
        </div>
        
        )
    }
    
    export default Social