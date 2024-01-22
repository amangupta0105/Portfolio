import React from 'react'
import '../css/Resume.css';
import WorkExperience from '../sub-components/WorkExperience';
import Education from '../sub-components/Education';

const Resume = () => {
    return (
        <div className='resume'>
            <div className='skills-section'>
                <h1 className='skills-heading'>
                    MY SKILLS
                </h1>
                <div className='skills'>
                    <div className='html5'>
                        <h3>HTML5</h3>
                        <div className='showbar'>
                            <p>95%</p>
                            <div class="progress-bar">
                                <div class="progress-html"></div>
                            </div>
                        </div>
                    </div>
                    <div className='css3'>
                        <h3>CSS3</h3>
                        <div className='showbar'>
                            <p>90%</p>
                            <div class="progress-bar">
                                <div class="progress-css"></div>
                            </div>
                        </div>

                    </div>
                    <div className='javascript'>
                        <h3>JavaScript</h3>
                        <div className='showbar'>
                            <p>95%</p>
                            <div class="progress-bar">
                                <div class="progress-javascript"></div>
                            </div>
                        </div>
                    </div>
                    <div className='jquery'>
                        <h3>jQuery</h3>
                        <div className='showbar'>
                            <p>80%</p>
                            <div class="progress-bar">
                                <div class="progress-jquery"></div>
                            </div>
                        </div>

                    </div>
                    <div className='dom'>
                        <h3>DOM</h3>
                        <div className='showbar'>
                            <p>85%</p>
                            <div class="progress-bar">
                                <div class="progress-dom"></div>
                            </div>
                        </div>

                    </div>
                    <div className='react'>
                        <h3>ReactJS</h3>
                        <div className='showbar'>
                            <p>90%</p>
                            <div class="progress-bar">
                                <div class="progress-react"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='resume-section'>
                <h1 className='skills-heading'>
                    RESUME
                </h1>
                <div className='working-section'>
                  <WorkExperience /> 
                </div>
                <div className='education-section'>
                    <Education />
                </div>
            </div>
        </div>
    )
}

export default Resume