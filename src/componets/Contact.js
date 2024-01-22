import React from 'react'
import {FaPhoneAlt} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";
import {TiLocationArrowOutline} from "react-icons/ti";
import FormDetails from './FormDetails';
import '../css/Contact.css';

const Contact = () => {

    return (
        <div className='contact'>
            <h1 className='conatact-heading'>CONTACT ME</h1>
            <div className='contact-section'>
                <div className='contact-form'>
                    <FormDetails/>
                </div>
                <div className='contact-details'>
                    <div className='phone'>
                        <div className='phone-icon'>
                            <FaPhoneAlt/>
                        </div>
                        <div className='phone-details'>
                            <h3>Phone</h3>
                            <p>+91 9870244149</p>
                            <p>+91 9953960951</p>
                        </div>
                    </div>
                    <div className='email'>
                        <div className='email-icon'>
                            <MdOutlineMail/>
                        </div>
                        <div className='email-details'>
                            <h3>Email</h3>
                            <p>amangupta0105@gmail.com</p>
                        </div>
                    </div>
                    <div className='address'>
                        <div className='address-icon'>
                            <TiLocationArrowOutline/>
                        </div>
                        <div>
                            <h3>Address</h3>
                            <p>Delhi-110095</p>
                            <p>India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact