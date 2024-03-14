import React from 'react'
import imgVino from '../assets/img/img4.jpg'
import "./Home.css"


function Home() {
  return (
    <section className='section_home'>
        <img src={imgVino} alt="imagen vino" />
    </section>
  )
}

export default Home