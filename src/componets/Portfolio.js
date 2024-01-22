import React from 'react';
import '../css/Portfolio.css';
import {projects} from '../data_files/projects';

const Portfolio = () => {

    return (
        <div className='portfolio'>
            <h1 className='portfolio-heading'>PORTFOLIOS</h1>
            <div className='projects-details'>
                {
                    projects.map(function (item, index) {
                        return (
                             <a href={item.link} target='_blank' rel='noopener noreferrer' className='project' key={index}>
                                <img src={process.env.PUBLIC_URL + item.img} alt='project_photo'/>
                                <h3 className='project-heading'>
                                    <a href={item.link} target='blank'>
                                        {item.title}
                                    </a>
                                </h3>
                                <p className='project-deatils'>{item.headline}</p>
                            </a>
                        )
                    })
                }
            </div>
            <div className='projects-pageno'>
                1
            </div>
        </div>
    )
}

export default Portfolio