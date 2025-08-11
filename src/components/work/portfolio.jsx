import React, { useState } from 'react';
import './portfolio.css';
import WorkTab from './WorkTab';
import {motion} from 'framer-motion'

const Portfolio = () => {
  const project = [
  {
    id: 1,
    title: "PaniPuri Paradise",
    description: "A vibrant food website showcasing the joy of street food.",
    image: "/Panipuri-Paradise.png",
    link: "https://panipuri-paradise.com/"
  },
  {
    id: 2,
    title: "India Travel With Sid",
    description: "Explore India with curated travel guides and itineraries.",
    image: "/Indiatravel.png",
    link: "https://indiatravelwithsid.com/"
  },
  {
    id: 3,
    title: "Beautiful Coordinates",
    description: "Promoting unique, lesser-known travel destinations.",
    image: "/Beauco.png",
    link: "https://beauco.in/"
  },
  {
    id: 4,
    title: "Yellow Design Cafe",
    description: "Showcasing creative solutions in architecture and interiors.",
    image: "/yellowdesign.png",
    link: "https://yellowdesigncafe.com/"
  },
  
  {
    id: 6,
    title: "22 Electric House",
    description: "A professional site for professional services.",
    image: "/Electrichouse.png",
    link: "https://22electrichouse.com/"
  }
];
 const AllProjects=[
     {
    id: 1,
    title: "PaniPuri Paradise",
    description: "A vibrant food website showcasing the joy of street food.",
    image: "/Panipuri-Paradise.png",
    link: "https://panipuri-paradise.com/"
  },
  {
    id: 2,
    title: "India Travel With Sid",
    description: "Explore India with curated travel guides and itineraries.",
    image: "/Indiatravel.png",
    link: "https://indiatravelwithsid.com/"
  },
  {
    id: 3,
    title: "Beautiful Coordinates",
    description: "Promoting unique, lesser-known travel destinations.",
    image: "/Beauco.png",
    link: "https://beauco.in/"
  },
  {
    id: 4,
    title: "Yellow Design Cafe",
    description: "Showcasing creative solutions in architecture and interiors.",
    image: "/yellowdesign.png",
    link: "https://yellowdesigncafe.com/"
  },
  
  {
    id: 6,
    title: "22 Electric House",
    description: "A professional site for professional services.",
    image: "/Electrichouse.png",
    link: "https://22electrichouse.com/"
  },
  {
    id: 7,
    title: "SignSense",
    description: "A real-time video calling app with ASL sign recognition using TensorFlow.js, MediaPipe, and WebRTC.",
    image: "Sign-sense.png",
    link: "https://sign-sense-alpha.vercel.app/"
  }
 ]
const React = [
  {
    id: 7,
    title: "SignSense",
    description: "A real-time video calling app with ASL sign recognition using TensorFlow.js, MediaPipe, and WebRTC.",
    image: "Sign-sense.png",
    link: "https://sign-sense-alpha.vercel.app/"
  }
];


  const [Toggled, setToggled] = useState('Tab1'); // track active tab string

  const togglebutton = (tabName) => {
    setToggled(tabName);
    console.log('Switched to', tabName);
  };

  return (
    <div className='Work-section'>
       <motion.h2     
        initial={{scale:0.5,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{duration:0.6, ease:"anticipate"}}
      className='font-bold text-center'> Projects </motion.h2>

      <div className="Tab-section">
        <div className="tabs transition-all duration-300 flex justify-center gap-10 ">
          <div className={Toggled === 'Tab1'?"tab cursor-pointer active":"tab cursor-pointer inactive"} onClick={() => togglebutton('Tab1')}>Wordpress</div>
          <div className={Toggled === 'Tab2'?"tab cursor-pointer active":"tab cursor-pointer inactive"} onClick={() => togglebutton('Tab2')}>React</div>
          
        </div> 

        
       
        {Toggled === 'Tab1' && <WorkTab project={project} tab="Tab1" />}
        {Toggled === 'Tab2' && <WorkTab project={React} tab="Tab2" />}
       
      </div>
    </div>
  );
};

export default Portfolio;
