import React from 'react'
import DownloadCV from './DownloadCV'
import { FaCode } from "react-icons/fa6";
import '../css/About.css';

const About = () => {
  const deatils ={
    name:'Aman Gupta',
    age:'26',
    nationality :'Indian',
    languages:['English ','Hindi'],
    address : 'New Delhi,India',
    scope:['Full Time Oppurtunities',' / ','Freelance']
  }

    return (
        <div className='about'>
            <h1 className='about-heading'>ABOUT ME</h1>
            <div className='about-section'>
              <div className='about-img'>
                <img src={process.env.PUBLIC_URL + '../assets/profile.jpeg'} alt='profile_photo'/>
              </div>
              <div className='about-description'>
                <h2>I am <span className='name'>Aman Gupta</span></h2>
                <p>
                Enthusiastic Front-End Developer with expertise in ReactJS and JavaScript, seeking opportunities to contribute to innovative projects in Front-End development. Bringing a total of 2.6 years of experience in software development, including 1.6 years at TCS and 1+ year as a Front-End Freelancer Developer. Adept at creating responsive and user- friendly web applications.
                </p>
                <div className='about-details'>
                  <table>
                    <tr>
                      <td>Full Name</td>
                      <td>:</td>
                      <td>{deatils.name}</td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td>:</td>
                      <td>{deatils.age}</td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>:</td>
                      <td>{deatils.nationality}</td>
                    </tr>
                    <tr>
                      <td>Languages</td>
                      <td>:</td>
                      <td>{deatils.languages}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>{deatils.address}</td>
                    </tr>
                    <tr>
                      <td>Looking for</td>
                      <td>:</td>
                      <td>{deatils.scope}</td>
                    </tr>
                  </table>
                  <br/>
                  {/* Not working */}
                  <DownloadCV />
                   {/* ===== */}
                </div>
              </div>

            </div>
            <div className='services'>
            <h1 className='about-heading'>SERVICES</h1>
              <div className='services-block'>
                <FaCode />
                <h5>Web Devlopment</h5>
                <p>
                Fueling Creativity with ReactJS: Crafting Seamless Web Experiences Inspired by Top Courses, Backed by Rigorous Documentation, Anticipating Challenges, and Mastering Design Integration
                </p>
              </div>
            </div>

        </div>
    )
}

export default About