import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='about-section text-center justify-center py-6 gap-6'>

        <span className='font-bold'>About</span>
        <div className="boxLayout  lg:flex grid grid-cols-1  text-sm" >
            <div className="innerbox  ">
                <h2> Title</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quae quis facilis quibusdam repellat voluptates nihil, eius, expedita nemo eum in blanditiis obcaecati? Facere quasi at minus labore, necessitatibus itaque?</p>
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