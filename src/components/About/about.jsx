import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='about-section text-center justify-center py-6 gap-6'>

        <span className='font-bold'>About</span>
        <div className="boxLayout lg:grid lg:grid-cols-2 flex flex-col text-sm">
            <div className="innerbox">
                <h2> Title</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quae quis facilis quibusdam repellat voluptates nihil, eius, expedita nemo eum in blanditiis obcaecati? Facere quasi at minus labore, necessitatibus itaque?</p>
            </div>
            <div className="innerbox2">
                <div className="innersubbox"><h2> Title</h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quae quis facilis quibusdam repellat voluptates nihil, eius, expedita nemo eum in blanditiis obcaecati? Facere quasi at minus labore, necessitatibus itaque?</p></div>
                <div className="innersubbox"><h2> Title</h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quae quis facilis quibusdam repellat voluptates nihil, eius, expedita nemo eum in blanditiis obcaecati? Facere quasi at minus labore, necessitatibus itaque?</p></div>

            </div>
            

        </div>
    </div>
  )
}

export default About