import React,{useState} from 'react'
import toast from 'react-hot-toast';
import '../css/FormDetails.css';

const FormDetails = () => {
    const [formdetails,setFormDetails] = useState({
        fullname:'',
        email:'',
        subject:'',
        message:''
      })

      function sendHandler(){
        console.log(formdetails);
        if((formdetails.fullname && formdetails.email && formdetails.subject && formdetails.message)){
            toast.success('Email Sent Succesfull')
        }
        else{
            toast.error('Fill all the details')
        }

      }
      function changeHandler(event){
        setFormDetails(function(prevdata){
            return {
                ...prevdata,
                [event.target.name] : event.target.value
            };
        });
      }

  return (
    <div className='form-details'>
        <h2>Get In Touch</h2>
        <form>
            <label htmlFor='fullname'>
                Enter your Name<sup> * </sup>:-
                <input type='text' name='fullname' value={formdetails.fullname} onChange={changeHandler} required/>
            </label>
            <label htmlFor='email'>
                Enter your Email<sup> * </sup>:-
                <input type='email' name='email' value={formdetails.email} onChange={changeHandler} required/>
            </label>
            <label htmlFor='subject'>
                Enter your Subject<sup> * </sup>:-
                <input type='text' name='subject' value={formdetails.subject} onChange={changeHandler} required/>
            </label>
            <label htmlFor='message'>
                Enter your Message<sup> * </sup>:-
                <textarea cols='30' rows='7' name='message' value={formdetails.message} onChange={changeHandler} required/>
            </label>
        </form>
        <button onClick={sendHandler}>
              SEND MAIL
        </button>
    </div>
  )
}

export default FormDetails