import React from 'react';
import './hero.css';
import Scroll from '../../assets/scroll.png';
import Avatar from '../../assets/Avatar.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className="hero  h-screen m-auto lg:flex lg:flex-row md:flex md:flex-col-reverse  flex-col-reverse items-center justify-between  relative overflow-hidden">
        {/* Left content */}
        <div className="intro  hero-content flex flex-col  md:items-center  items-center lg:items-start py-8  justify-center gap-6">
          <h1 className="text-xl lg:text-left md:text-center text-lightgray">Amardeep Kumar</h1>
          <p className="lg:text-5xl md:text-4xl  lg:text-left md:text-center text-center text-3xl  font-bold text-lightgray leading-relaxed">A passionate Web Developer<br></br> UI/UX Designer</p>
          <div className="buttons flex gap-4">
            <button className="bg-white resume text-sm lg:text-lg  text-black py-3 md:text-sm rounded-4xl cursor-pointer">
              Resume
            </button>
            <button className="bg-gray border-2 text-lg border-white lg:text-lg  text-white md:text-sm md:overflow-normal rounded-4xl cursor-pointer">
              Contact Me
            </button>
          </div>
          
          {/* Scroll icon with fade-in animation */}
          <motion.img
            initial={{ opacity: 0, scale:0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', repeat: Infinity}}
          
            className="h-10 w-10  "
            src={Scroll}
            alt="scroll" />
        </div>

        {/* Right image */}
        <div className="right-image  flex  justify-center z-[12]">
        <img className=" lg:h-80 lg:w-80 h-80  z-[12]" src={Avatar} alt="Amardeep Kumar" />
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
