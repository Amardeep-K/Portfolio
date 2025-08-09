import React from 'react'

const Footer = () => {
  return (
      <footer className=" text-white py-10 h-20 flex flex-col justify-center items-center" >
      <div className="    flex flex-col md:flex-row justify-between gap-5 items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Amardeep Kumar | All rights reserved.</p>

        
      </div>
    </footer>
  )
}

export default Footer