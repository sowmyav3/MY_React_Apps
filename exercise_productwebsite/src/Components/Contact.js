import React from 'react';
import { useState } from 'react';
import './Contact.css';
function Contact(props) {
    const [disabled, setdisabled] = useState("true");
    const [name, setName] = useState('');
    const namehandleChange = event => {
        setName(event.target.value);
    };
    const [email, setemail] = useState('');
    const emailhandleChange = event => {
        setemail(event.target.value);
    };
    const [num, setnum] = useState('');
    const NumberhandleChange = event => {
        setnum(event.target.value);
    };
    const [message, setmessage] = useState('');
    const messagehandleChange = event => {
        setmessage(event.target.value);
    };
    const Contacthandler = () => {
        if (name!==" " || name!==""){
            if(email!==" "|| email!==""){
                if(num!==" "|| num!==""){
                    if(message!==" "|| message!==""){
                        setdisabled("false");
                    }
                }
            }
        }
        console.log(disabled)

        {
            if (disabled === "true") {
                alert("Please fill all the details correctly")
            }
            if (disabled === "false") {
                alert("your info submitted successfully")
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className='col-md-7'>
                    <h1>Get in touch</h1>
                    <form className='needs-validation'>
                        <div className='form-group was-validated mb-3'>
                            <label htmlFor='formGroupExampleInput' className='form-label'>
                                Name
                            </label>
                            <input type="text" className='form-control' id="formGroupExampleInput" onChange={namehandleChange} value={name} required></input>
                            <div className='invalid-feedback'>
                                Please enter your name
                            </div>
                        </div>
                        <div className='form-group was-validated mb-3'>
                            <label htmlFor='formGroupExampleInput2' className='form-label'>
                                Email Address
                            </label>
                            <input type="email" className='form-control' id="formGroupExampleInput2" onChange={emailhandleChange} value={email} required></input>
                            <div className='invalid-feedback'>
                                Please enter your email
                            </div>
                        </div>
                        <div className='form-group was-validated mb-3' >
                            <label htmlFor='formGroupExampleInput2' className='form-label'>
                                Contact Number
                            </label>
                            <input type="text" className='form-control' id="formGroupExampleInput2" onChange={NumberhandleChange} value={num} required></input>
                            <div className='invalid-feedback'>
                                Please enter your Phone Number
                            </div>
                        </div>
                        <div className='form-group was-validated mb-3' >
                            <label htmlFor='formGroupExampleControlTextarea1' className='form-label'>
                                Message
                            </label>
                            <input className='form-control' id="exampleFormControlTextarea1" rows={3} onChange={messagehandleChange} value={message} required></input>
                            <div className='invalid-feedback'>
                                Please enter your Message
                            </div>
                        </div>
                        <button classname="btn btn-primary" onClick={Contacthandler}>Submit</button>
                    </form>
                   
                </div>
                <div className='col-md-5'>
                        <h2>Contact Us</h2>
                        <div className='mt-4'>
                            <div className='d-flex'>
                                <i class="bi bi-geo-alt-fill"></i>
                                <p >Address: hyderabad</p>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-telephone-fill"></i>
                                <p>Contact :- +91 8988276599</p>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-envelope-fill"></i>
                                <p>Email:- Contact@gmail.com</p>
                            </div>
                            <div className='d-flex'>
                                <i class="bi bi-browser-chrome"></i>
                            <p>Website: www.contact.com</p>
                            </div>

                        </div>
                    </div>
            </div>

        </div>
    );
}

export default Contact;