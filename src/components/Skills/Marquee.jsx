import React from 'react'
import { easeIn, motion } from 'framer-motion';
import "./Marquee.css"

const Marquee = ({image,from,to}) => {
  return (
   <div className='flex Marquee-slider '>
    
    
    <motion.div  
     initial={{x:`${from}`}} 
    animate={{x:`${to}`}}
    transition={{duration:10 ,repeat:Infinity , ease:"linear"}}
    className=" Marquee-container  flex  flex-shrink-0 ">
    {image.map((icon , idx)=>{
       return (
         <React.Fragment key={idx}>
       <img className=' flex h-10   lg:gap:2 md:gap:2 gap:2 w-[1.5rem] lg:w-[4rem] md:w-[3rem]' style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)' }}  src={icon.src} key={idx}/>
         <div className="skillInfo "><p>{icon.title}</p></div>
      </React.Fragment>)
})}
    
    </motion.div>
     <motion.div  
     initial={{x:`${from}`}} 
    animate={{x:`${to}`}}
    transition={{duration:10 ,repeat:Infinity , ease:"linear"}}
    className=" Marquee-container  flex flex-shrink-0 ">
    {image.map((icon , idx)=>{
       return (
      <React.Fragment key={idx}>
       <img className=' flex h-10 lg:gap:2 md:gap:2 gap:2 w-[1.5rem] lg:w-[4rem] md:w-[3rem]' style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)'  }}  src={icon.src} key={idx}/>
         <div className="skillInfo "><p>{icon.title}</p></div>
       </React.Fragment>
       )
})}
    
    </motion.div>
    
    
</div>
  )
}

export default Marquee