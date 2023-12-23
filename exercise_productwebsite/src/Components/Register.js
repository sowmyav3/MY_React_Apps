import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
function Register(props) {
    const [disabled, setdisabled] = useState("true");
    const [name, setName] = useState('');
    const namehandleChange = event => {
        setName(event.target.value);
    };
    const [email, setemail] = useState('');
    const emailhandleChange = event => {
        setemail(event.target.value);
    };
    const [password, setPassword] = useState('');

    const PasswordhandleChange = event => {
        setPassword(event.target.value);
    };
    const [repassword, setrePassword] = useState('');
    const [passcheck, setpasscheck] = useState('not matched');
    const RePasswordhandleChange = event => {
        setrePassword(event.target.value);
    };



    const Registerhandler = () => {
        if (name!==" " || name!==""){
            if(email!==" "|| email!==""){
                if(password!==" "|| password!==""){
                    if(repassword!==" "|| repassword!==""){
                        setdisabled("false");
                    }
                }
            }
        }
        console.log(disabled)

        {
            if (disabled === "true") {
                alert("Please fill all the details")
            }
            if ((disabled === "false") &&(password==repassword)) {
                alert("user registered successfully")
            }
            if ((disabled === "false") &&(password!==repassword)) {
                alert("please fill passwords correctly")
            }
        }
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#CFE9FF',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: "transparent",
    }));

    return (

        <div className='registerpage'>
            <div className=' wrapper  justify-content-center w-100'>
                <span className='registerContent'>
                    REGISTRATION PAGE
                </span>
                <Grid
                    container
                    sx={{marginTop:"14rem", marginLeft:"54rem"}}
                >
                    <Grid item >
                        <Item>
                            <div>
                            <div>
                                    <span className='register-text1'>Name:</span>

                                    <TextField
                                        required
                                        id="filled-required"
                                        placeholder='enter your full name'
                                        onChange={namehandleChange} 
                                        value={name}
                                        
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className='register-text1'>Email:</span>

                                    <TextField
                                        required
                                        id="filled-required"
                                        onChange={emailhandleChange} 
                                        value={email}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className='register-text2'>Password:</span>
                                    <TextField
                                        required
                                        id="filled-required"
                                        type="password"
                                        onChange={PasswordhandleChange} 
                                        value={password}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className='register-text2'>Password:</span>
                                    <TextField
                                        required
                                        id="filled-required"
                                        type="password"
                                        placeholder='enter password again'
                                        onChange={RePasswordhandleChange} 
                                        value={repassword}
                                    />
                                </div>
                                <Button sx={{ backgroundColor: "#095996", border: "2", margin: "17px", color: "white", width: "95px", marginLeft: "272px" }}
                                    type="submit" 
                                    onClick={Registerhandler}
                                    >REGISTER</Button>
                                <br/>
                                <span className='register-user'>Already have an account :
                                    <Link to="/login" className='register-log'>
                                        Login
                                    </Link>
                                </span>
                            </div>
                        </Item>

                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default Register;