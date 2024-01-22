import React from 'react'
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './componets/Home';
import About from './componets/About';
import Resume from './componets/Resume';
import Contact from './componets/Contact';
import Portfolio from './componets/Portfolio';
import {FaRegCopyright} from "react-icons/fa";
import './css/Navbar.css';
import Achivements from './componets/Achivements';

const Navbar = () => {
    return (
        <div className="navbar-section">

            <div className='navbar'>
                <ul className='navbar-list'>
                    <li className='line-after'>
                        <NavLink to='/'><img
                            src={process.env.PUBLIC_URL + '../assets/profile.jpeg'}
                            alt='profile_photo'/></NavLink>
                    </li>   
                    <li>
                        <NavLink to='/home'>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume'>RESUME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio'>PORTFOLIOS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/achivements'>ACHIVEMENTS</NavLink>
                    </li>
                    <li className='line-after'>
                        <NavLink to='/contact'>CONTACT</NavLink>
                    </li>
                </ul>
                <p><FaRegCopyright/> 2024</p>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/achivements' element={<Achivements/>}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Navbar