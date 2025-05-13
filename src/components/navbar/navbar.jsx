import {React, useState} from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faLinkedin  , faInstagram} from '@fortawesome/free-brands-svg-icons';
import {motion} from "framer-motion"
import Avatar from "../../assets/avatar.png"
const Navbar = () => {
  return (
    <div className=' navbar'>
        {/* sidebar */}
        <div className="wrapper  ">
          
         
            <motion.div
            initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5, ease:"anticipate"}}
             className='flex  items-center justify-center gap-4'>
              <img className=' site-logo h-12 rounded-full' src={Avatar} alt="" />
             <span className="site-title font-bold  text-lightgray">Amardeep Kumar</span>
             </motion.div>

              <div className="menu lg:flex md: hidden items-center justify-center">
            <ul className='flex gap-4 text-md font-bold'>
              <motion.li
                initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5, ease:"anticipate"}}
              >
                <a href="#home">Home</a>
              </motion.li>
              <motion.li
              initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5, ease:"anticipate"}}
              >
                <a href="#services">Services</a>
              </motion.li>
               <motion.li
               initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.6, ease:"anticipate"}}
            >
                <a href="#portfolio">Portfolio</a>
               </motion.li>
               <motion.li
               initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.7, ease:"anticipate"}}>
                <a href="#contact">Contact</a>
               </motion.li>
            </ul>
          </div>
            <div className="social flex gap-4">
                <motion.a
                initial={{scale:0.5,opacity:0}}
                animate={{scale:1,opacity:1}}
                transition={{duration:0.5, ease:"anticipate"}}
                href="https://www.linkedin.com/in/amardeep-kumar-0b8a1b1b4/" target="_blank" rel="noopener noreferrer">
                   <FontAwesomeIcon icon={faInstagram}  className=' text-2xl ' />
                </motion.a>
                <motion.a 
                  initial={{scale:0.5,opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{duration:0.5, ease:"anticipate"}}
                  href="https://www.linkedin.com/in/amardeep-kumar-0b8a1b1b4/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub}  className=' text-2xl ' />
                </motion.a>
                <motion.a
                  initial={{scale:0.5,opacity:0}}
                  animate={{scale:1,opacity:1}}
                  transition={{duration:0.5, ease:"anticipate"}}
                  href="https://www.linkedin.com/in/amardeep-kumar-0b8a1b1b4/" target="_blank" rel="noopener noreferrer">
                   <FontAwesomeIcon icon={faLinkedin} className='  text-2xl rounded' />
                </motion.a>
            </div>
        </div>
    </div>
  )
}

export default Navbar