import React from 'react'

const Skillset = () => {
  const skills = [
  {
    title: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    title: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    title:"Tailwind",
    image:"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
  },
  {
    title:"Framer Motion",
    image:"https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
  },
  {
    title: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    title: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },

  
  {
    title: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
  },
  {
    title: "Express",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    title: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    title: "GitHub",
    image: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
  },
  {
    title:"cPanel",
    image:"https://cdn.worldvectorlogo.com/logos/cpanel.svg"
  },
  {
    title: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    title: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    title: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    title: "C++",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    title: "WordPress",
    image: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg"
  },
  {
    title: "Elementor",
    image:"https://cdn.iconscout.com/icon/free/png-512/free-elementor-3628750-3029975.png?f=webp&w=512" // not official devicon, but a clean transparent png that fits dark bg
  }
];


  return (
    <div style={{
        margin:'auto',
        padding:'2rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'1rem',
        border:'none'
    }} className=" flex   flex-wrap items-center">
      
        {skills.map(data => (
          <div key={data.id} className='lg:h-[5rem] lg:w-[5rem] h-[3.5rem] w-[3.5rem] ' style={{
            padding:'1rem',
            display:'flex',
            flexDirection:'column',
            gap:'1rem',
            borderRadius:'50%',
            borderColor:'rgb(51, 153, 255,0.3)',
            background:'rgb(51, 153, 255,0.2)'
          }} >
            <img  className=" lg:h-[4rem]" src={data.image} alt={data.title} />
            {/* <h2>{data.title}</h2> */}
            
            
          </div>
        ))}
      </div>
    
  );
}

export default Skillset