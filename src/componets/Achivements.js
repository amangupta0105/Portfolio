import React from 'react';
import '../css/Achievements.css';
import { achievements } from '../data_files/achivement';

const Achievements = () => {

  return (
    <div className='achievements-section'>
      <h1 className='achievements-heading'>ACHIEVEMENTS</h1>
      <div className='achievements-details'>
        {achievements.map((item, index) => (
          <div className='achievement' key={index}>
            <img src={process.env.PUBLIC_URL + item.img} alt='medal'className='achievement-image'/>
            <p className='achievement-description'>{item.award}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
