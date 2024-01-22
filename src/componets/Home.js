import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../css/Home.css'

const Home = () => {

  return(
    <div className='home-section'>
      <h1>Hi, I am <span className='name'>Aman Gupta</span></h1>
      <p className='home-about'>
      I am a frontend web developer. I can provide clean code and pixel perfect design. 
      I also make website more & more interactive with web animations.
      </p>
      <div className='social-home'>
        <ul>
          <li><a href='https://www.linkedin.com/in/amangupta0105/'><FaLinkedin /> </a></li>
          <li><a href='https://github.com/amangupta0105' ><FaGithub /></a></li>
          <li><a href='https://twitter.com/Amangupta0105'><FaSquareXTwitter /></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Home