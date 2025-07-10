import React from 'react'
import Marquee from './Marquee'
import "./skill.css"
const Skills = () => {
    const UpperMarquee = [
  { src: "/canva.svg", title: "Canva" },
  { src: "/cpanel.svg", title: "cPanel" },
  { src: "/css.svg", title: "CSS" },
  { src: "/elementor.svg", title: "Elementor" },
  { src: "/express.svg", title: "Express.js" },
  { src: "/figma.svg", title: "Figma" },
  { src: "/flask.svg", title: "Flask" },
  { src: "/html5.svg", title: "HTML5" }
];

    const LowerMarquee = [
  { src: "/javascript.svg", title: "JavaScript" },
  { src: "/mongodb.svg", title: "MongoDB" },
  { src: "/mysql.svg", title: "MySQL" },
  { src: "/nodedotjs.svg", title: "Node.js" },
  { src: "/php.svg", title: "PHP" },
  { src: "/python.svg", title: "Python" },
  { src: "/react.svg", title: "React" },
  { src: "/tailwindcss.svg", title: "Tailwind CSS" },
  { src: "/webrtc.svg", title: "WebRTC" },
  { src: "/woocommerce.svg", title: "WooCommerce" },
  { src: "/wordpress.svg", title: "WordPress" }
];

  return (
  <div className='Skills-Section'>
 <Marquee image={UpperMarquee} from={0} to={'-100%'}/>
  <Marquee className='lg:visible hidden' image={LowerMarquee} from={'-100%'} to={0}/>

 </div>


  )
}

export default Skills