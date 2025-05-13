import React from 'react'
import "./App.css"
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Portfolio from './components/work/portfolio'

const App = () => {
  return (
    <div>
      <Navbar/>
      <section id="hero"><Hero/></section>
      <section>Parralax</section>
      <section id="services">Services</section>
      <section><Portfolio/></section>
      <section></section>
    </div>
  )
}

export default App