import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='about-section text-center justify-center py-6 gap-6'>

        <span className='font-bold'>About</span>
        <div className="boxLayout  lg:flex grid grid-cols-1  text-sm" >
            <div className="innerbox  ">
                <h2> Title</h2>
            <p className="text-sm text-justify font-['IBM_Plex_Sans']">Freelance Web & Mobile UI/UX Designer
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internet tend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you.</p>
            </div>
            <div className="innerbox2 ">
                <h2> Title</h2>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quae quis facilis quibusdam repellat voluptates nihil, eius, expedita nemo eum in blanditiis obcaecati? Facere quasi at minus labore, necessitatibus itaque?</p>
                
            </div>
            

        </div>
    </div>
  )
}

export default About