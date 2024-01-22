import React from 'react'
import {IoSchoolOutline} from "react-icons/io5";
import {education} from '../data_files/eduction';
import '../css/Education.css';

const Education = () => {
    return (
        <div className='education'>
            <h3 className='education-heading'><span className='education-icons'><IoSchoolOutline/></span>
                Educational Qualifications</h3>
            <div className='education-section'>
                {
                    education.map(function (item, index) {
                        return (
                            <div className='education-box' key={index}>
                                <h4>{item.degree}</h4>
                                <h5>{item.school}</h5>
                                <h5>{item.year}</h5>
                                <p>{item.marks}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education