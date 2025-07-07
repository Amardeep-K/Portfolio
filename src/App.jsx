import React from 'react'
import "./App.css"
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/About/about'
import Portfolio from './components/work/portfolio'
import Skills from './components/Skills/skills'

const App = () => {
  return (
    <div>
      <Navbar/>
      <section id="hero"><Hero/></section>
      <section><About/> </section>
      <section><Skills/> </section>
      <section><Portfolio/></section>
      <section></section>
    </div>
  )
}

export default App