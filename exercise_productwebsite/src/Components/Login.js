import React from 'react';
import '../LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
    const [email, setemail] = useState('');
    const [disabled,setdisabled]= useState("true");
    const emailhandleChange = event => {
        setemail(event.target.value);
    };
    const [password, setPassword] = useState('');

    const PasswordhandleChange = event => {
        setPassword(event.target.value);
    };

    const loginhandler = ()=>{
        if(email!==" "  || email!==""){
            if(password!==" " || password!==""){
                setdisabled("false")
            }
        }
        {
            if(disabled==="true"){
                alert("Please fill all the details")
            }
            if(disabled==="false"){
                alert("user logged in successfully")
            }
        }
    }

    return (
        <div className='wrapper d-flex align-items-center justify-content-center w-100 bg-secondary'>
            <div className='login rounded'>
                <h2 className='mb-3'>Login Form</h2>
                <form className='needs-validation'>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='email' className='form-label'>
                            Email Address
                        </label>
                        <input type="email" className='form-control' onChange={emailhandleChange} value={email} required></input>
                        <div className='invalid-feedback'>
                            Please enter your email
                        </div>
                    </div>
                    <div className='form-group was-validated mb-2' >
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input type="password" className='form-control' onChange={PasswordhandleChange} value={password} required></input>
                        <div className='invalid-feedback'>
                            Please enter your password
                        </div>
                    </div>
                    <button type="submit" classname="btn btn-success w-100 mt-2" onClick={loginhandler}>LOG In</button>
                    <p>New User <Link to="/Register">Register</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;