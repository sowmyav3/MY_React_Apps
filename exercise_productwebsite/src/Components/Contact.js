import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
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
                        <div className='mt-4'style={{marginLeft:"1rem"}}>
                             <div className='d-flex'>
                                 <LocationOnIcon fontSize='small' ></LocationOnIcon>
                                 <p >Address: hyderabad</p>
                             </div>
                             <div className='d-flex'>
                                 <LocalPhoneIcon fontSize='small'/>
                                 <p>Contact :- +91 8988276599</p>
                             </div>
                             <div className='d-flex'>
                                 <EmailIcon fontSize='small'/>
                                 <p>Email:- Contact@gmail.com</p>
                             </div>
                             <div className='d-flex'>
                                 <LanguageIcon fontSize='small'/>
                             <p>Website: www.contact.com</p>
                             </div>

                         </div>
                    </Paper>
                </Box>

            </div>
        </div>
    );
}

export default Contact;