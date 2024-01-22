import React from 'react'
import { MdOutlineWorkOutline } from "react-icons/md";
import { experience } from '../data_files/experience';
import '../css/WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className='workexperience'>
        <h3 className='workexperience-heading'><span className='resume-icons'><MdOutlineWorkOutline /></span>Working Experience</h3>
        <div className='workexperience-section'>
          {experience.map(function(item,index){
            return(
              <div className='experience-box' key={index}>
                <h4>{item.company}</h4>
                <h5>{item.position}</h5>
                <p>{item.year}</p>
                <ul>
                  <li>{item.point1}</li>
                  <li>{item.point2}</li>
                  <li>{item.point3}</li>
                  <li>{item.point4}</li>
                </ul>
              </div>
            )
          })}
        </div>

    </div>
  )
}

export default WorkExperience