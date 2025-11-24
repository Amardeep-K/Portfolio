import React from 'react';
import './hero.css';
import { Link } from "react-scroll";
import Scroll from '../../assets/scroll.png';
import Avatar from '../../assets/Avatar.png';

import { motion } from 'framer-motion';
import { useTypewriter , Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words : [' Web Developer', ' UI Designer',' Wordpress Developer',' FullStack Developer'],
    loop: 0  ,// or loop: true for infinite loop
delaySpeed: 1000,
    deleteSpeed:20
  })
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };
  return (
    <>
      <div className="hero  m-auto lg:flex lg:flex-row md:flex md:flex-col-reverse  flex-col-reverse items-center justify-between  relative overflow-hidden">
        <div className="hero-container flex  lg:h-full m-auto lg:flex lg:flex-row md:flex md:flex-col-reverse  flex-col-reverse items-center  justify-between relative overflow-hidden">
        {/* Left content */}
        <div className="intro  hero-content flex flex-col  md:items-center  items-center lg:items-start py-8  justify-center gap-6">
           <motion.h1    
            initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.6, ease:"anticipate"}}h1 className="text-2xl
           lg:text-left md:text-center text-center text-lightgray font-bold">Hi , I'm Amardeep👋</motion.h1>
          <motion.h2     
           initial={{scale:0.5,opacity:0}}
           animate={{scale:1,opacity:1}}
           transition={{duration:0.6, ease:"anticipate"}} className="lg:text-5xl md:text-4xl  lg:text-left md:text-center text-center text-[1rem]  lg:w-full w-screen  font-bold lg:font-bold text-lightgray leading-relaxed">A Passionate 
            <span style={{color:"#3eaeff"}}>{text} </span> <span><Cursor/></span>
            </motion.h2>
          <div className="buttons flex gap-4">
              <motion.button 
                   variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.2 }} href="https://www.google.com/" className=" resume text-sm lg:text-lg  text-black py-3 md:text-sm rounded-4xl cursor-pointer">
             <a href="./Amardeep_kumar_Resume.pdf" download={true}> Resume</a>
            </motion.button>
            <motion.button 
            variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.2 }}
            
            className="bg-gray border-2  border-white lg:text-lg  text-white text-sm md:overflow-normal rounded-4xl cursor-pointer! z-99">
           <a href="#contact">
             Contact
           </a>         

            </motion.button>
          </div>
          
          {/* Scroll icon with fade-in animation */}
  
            
        </div>

        {/* Right image */}
       <div className="right-image flex justify-center z-10 ">
        <img
          className="lg:h-80 lg:w-80 h-64 w-64 object-cover rounded-full shadow-2xl border-4 border-[hsl(210,100%,60%)] md:mb-9"
          src={Avatar}
          alt="Portrait of Amardeep Kumar"
        />
      </div>
      </div>
        {/* Scrolling marquee text */}
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="scrolling-text  absolute bottom-20 left-0 font-bold whitespace-nowrap lg:text-9xl z-[1]"
        >
          {/* Duplicate text to avoid blank space */}
          <span className="pr-32 ">
            Developer • Designer  • Coder • Web Enthusiast • Problem Solver  • Focused • Builder  • Creative Thinker &nbsp;
          </span>
          <span>
             Developer • Designer  • Coder • Web Enthusiast • Problem Solver  • Focused • Builder  • Creative Thinker &nbsp;
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
