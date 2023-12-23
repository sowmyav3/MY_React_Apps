import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
function Login() {
    const [email, setemail] = useState('');
    const [disabled, setdisabled] = useState("true");
    const emailhandleChange = event => {
        setemail(event.target.value);
    };
    const [password, setPassword] = useState('');

    const PasswordhandleChange = event => {
        setPassword(event.target.value);
    };

    const loginhandler = () => {
        if (email !== " " || email !== "") {
            if (password !== " " || password !== "") {
                setdisabled("false")
            }
        }
        {
            if (disabled === "true") {
                alert("Please fill all the details")
            }
            if (disabled === "false") {
                alert("user logged in successfully")
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
        <div className='loginpage'>
            <div className=' wrapper  justify-content-center w-100'>
                <span className='loginContent1'>
                    LOGIN PAGE
                </span>
                <Grid
                    container
                    sx={{marginTop:"14rem", marginLeft:"54rem"}}
                >
                    <Grid item >
                        <Item>
                            <div>
                                <div>
                                    <span className='login-text1'>Email:</span>

                                    <TextField
                                        required
                                        id="filled-required"
                                        onChange={emailhandleChange}
                                        value={email}
                                    />
                                </div>
                                <br />
                                <div>
                                    <span className='login-text2'>Password:</span>
                                    <TextField
                                        required
                                        id="filled-required"
                                        type="password"
                                        onChange={PasswordhandleChange}
                                        value={password}
                                    />
                                </div>
                                <Button sx={{ backgroundColor: "#095996", border: "2", margin: "17px", color: "white", width: "95px", marginLeft: "272px" }}
                                    type="submit" onClick={loginhandler} >LOGIN</Button>
                                <br/>
                                <Link className='login-forgottext'>Forgot Password</Link>
                                <br/>
                                <span className='login-user'>New User :
                                    <Link to="/register" className='login-reg'>
                                        Register
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

export default Login;