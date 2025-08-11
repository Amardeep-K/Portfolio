import React,{useState} from 'react'

import "./about.css"
import "../hero/hero.css"
import Skillset from './skillset';
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
   
  const [section,setSection]=useState("about")
   const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95,
      rotateX: 10
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95,
      rotateX: -10,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.6, 1]
      }
    }
  };
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

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
      <AnimatePresence mode="wait">
    {/* About Section */}
{ section === "about" && (
  <motion.div className='about-section text-center justify-center py-6 gap-6'
key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
  >
             <motion.h2     
              initial={{scale:0.5,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.6, ease:"anticipate"}} className='font-bold'>
                About Me
              </motion.h2>
        <div className="boxLayout lg:grid-cols-2 lg:grid grid grid-cols-1  text-sm" >
          <div className="innerbox2 w-screen  ">
                
             
            </div>
            <div className="innerbox w-full ">
                <h3 className="font-semibold text-2xl text-[hsl(210,100%,60%)]"> Who I Am</h3>
                <p>I’m Amardeep Kumar, a BCA graduate with a strong foundation in computer science and a deep passion for web development. Skilled in the MERN stack (MongoDB, Express.js, React, Node.js) and WordPress, I specialize in building interactive, user-friendly websites and applications. From developing engaging eCommerce platforms to creating innovative learning tools for kids, I combine technical expertise with creative design to deliver impactful digital experiences that solve real-world problems.

 </p>
           {/*  <ul  className="list-disc text-justify text-sm/8 ">
  <li>BCA graduate with a strong foundation in computer science.</li>
  <li>Skilled in <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js) and <strong>WordPress</strong>.</li>
  <li>Experienced in building interactive, user-friendly websites and web applications.</li>
  
  <li>Created innovative <strong>learning tools for kids</strong>, integrating games and LMS features.</li>
  
  <li>Passionate about problem-solving and staying updated with new technologies.</li>
</ul> */}
        <motion.button 
         variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
        className="btn-skills rounded-3xl  cursor-pointer" onClick={()=>{
          setSection("skill")
        }}>Skills</motion.button>


            </div>
            
            

        </div>
         </motion.div>
)}
{/* Skill Section */}
{ section === "skill" && (
  <motion.div className='about-section text-center justify-center py-6 gap-6'

              key="skills"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
  
              <motion.h2 className='font-bold'
                
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                
                Skills
              </motion.h2>
        <motion.div
                variants={skillsContainerVariants}
                initial="hidden"
                animate="visible"
                style={{ listStyle: "none", padding: 0 }}
              

         className="boxLayout lg:items-center  lg:flex grid grid-cols-1  text-sm" >
        
            <div className="skill-innerbox  w-full h-full ">
            <h2 className="lg:text-[1.5rem] text-[1.1rem] font-bold">Bringing practical web solutions to life with a focus on user clarity and accessibility. </h2> 

          <Skillset/>
       <motion.button 
         variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
        className="btn-skills rounded-3xl  cursor-pointer" onClick={()=>{
          setSection("about")
        }}>About</motion.button>


            </div>
            
            

        </motion.div>
         </motion.div>
)}
     </AnimatePresence>  
   
    </>
  )
}

export default About