import React from 'react';
import { useState } from 'react';
import './Contact.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
        if (name !== " " || name !== "") {
            if (email !== " " || email !== "") {
                if (num !== " " || num !== "") {
                    if (message !== " " || message !== "") {
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
        <div className='contactpage'>
            <div className=' wrapper  justify-content-center w-100'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            width: "470px",
                            height: "34rem",
                            marginTop: "4rem",
                        },
                    }}
                >
                    <Paper elevation={6}
                        sx={{ marginLeft: "230px", marginRight: "0px" }}
                    >
                        <span className='contact-content1'>Get in touch</span>
                        <div style={{ marginTop: "3rem" }}>
                            <div>
                                <span className='contact-text1'>Name:</span>

                                <TextField
                                    required
                                    border="1px"
                                    borderColor="black"
                                    id="filled-required"
                                    placeholder='enter your full name'
                                    onChange={namehandleChange}
                                    value={name}

                                />
                            </div>
                            <br />
                            <div>
                                <span className='contact-text1'>Email:</span>

                                <TextField
                                    required
                                    id="filled-required"
                                    onChange={emailhandleChange}
                                    value={email}
                                />
                            </div>
                            <br />
                            <div>
                                <span className='contact-text2'>Contact No:</span>
                                <TextField
                                    required
                                    id="filled-required"
                                    onChange={NumberhandleChange}
                                    value={num}
                                />
                            </div>
                            <br />
                            <div>
                                <span className='contact-text3'>Message:</span>
                                <TextField
                                    required
                                    id="filled-required"
                                    multiline
                                    rows={4}
                                    onChange={messagehandleChange}
                                    value={message}
                                />
                            </div>
                            <Button sx={{
                                backgroundColor: "#95D4E8", border: 1, margin: "17px", color: "white", fontSize: "20px", width: "127px", marginLeft: "272px", borderColor: "#08BEF5", borderWidth: "2px",
                                ":hover": {
                                    color: "black",
                                    backgroundColor: "#95D4E8"
                                }
                            }}
                                type="submit"
                                onClick={Contacthandler}
                            >SUBMIT</Button>
                        </div>
                    </Paper>
                    <Paper elevation={6} sx={{
                        width: "470px",
                        height: "34rem",
                        backgroundColor: "#5FB2F0",
                    }}>
                        <span className='contact-content1'>Contact us</span>
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
                    </Paper>
                </Box>

            </div>
        </div>
        // <div className="container">
        //     <div className="row">
        //         <div className='col-md-7'>
        //             <h1>Get in touch</h1>
        //             <form className='needs-validation'>
        //                 <div className='form-group was-validated mb-3'>
        //                     <label htmlFor='formGroupExampleInput' className='form-label'>
        //                         Name
        //                     </label>
        //                     <input type="text" className='form-control' id="formGroupExampleInput" onChange={namehandleChange} value={name} required></input>
        //                     <div className='invalid-feedback'>
        //                         Please enter your name
        //                     </div>
        //                 </div>
        //                 <div className='form-group was-validated mb-3'>
        //                     <label htmlFor='formGroupExampleInput2' className='form-label'>
        //                         Email Address
        //                     </label>
        //                     <input type="email" className='form-control' id="formGroupExampleInput2" onChange={emailhandleChange} value={email} required></input>
        //                     <div className='invalid-feedback'>
        //                         Please enter your email
        //                     </div>
        //                 </div>
        //                 <div className='form-group was-validated mb-3' >
        //                     <label htmlFor='formGroupExampleInput2' className='form-label'>
        //                         Contact Number
        //                     </label>
        //                     <input type="text" className='form-control' id="formGroupExampleInput2" onChange={NumberhandleChange} value={num} required></input>
        //                     <div className='invalid-feedback'>
        //                         Please enter your Phone Number
        //                     </div>
        //                 </div>
        //                 <div className='form-group was-validated mb-3' >
        //                     <label htmlFor='formGroupExampleControlTextarea1' className='form-label'>
        //                         Message
        //                     </label>
        //                     <input className='form-control' id="exampleFormControlTextarea1" rows={3} onChange={messagehandleChange} value={message} required></input>
        //                     <div className='invalid-feedback'>
        //                         Please enter your Message
        //                     </div>
        //                 </div>
        //                 <button classname="btn btn-primary" onClick={Contacthandler}>Submit</button>
        //             </form>

        //         </div>
        //         <div className='col-md-5'>
        //                 <h2>Contact Us</h2>
        //                 <div className='mt-4'>
        //                     <div className='d-flex'>
        //                         <i class="bi bi-geo-alt-fill"></i>
        //                         <p >Address: hyderabad</p>
        //                     </div>
        //                     <div className='d-flex'>
        //                         <i class="bi bi-telephone-fill"></i>
        //                         <p>Contact :- +91 8988276599</p>
        //                     </div>
        //                     <div className='d-flex'>
        //                         <i class="bi bi-envelope-fill"></i>
        //                         <p>Email:- Contact@gmail.com</p>
        //                     </div>
        //                     <div className='d-flex'>
        //                         <i class="bi bi-browser-chrome"></i>
        //                     <p>Website: www.contact.com</p>
        //                     </div> 

        //                 </div>
        //             </div>
        //     </div>

        // </div>
    );
}

export default Contact;