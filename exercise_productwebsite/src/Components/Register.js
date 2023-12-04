import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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

    return (
        <div>
            <div className='wrapper bg-secondary d-flex align-items-center justify-content-center w-100'>
                <div className='login rounded'>
                    <h2 className='mb-3'>Register Form</h2>
                    <form className='needs-validation'>
                        <div className='form-group was-validated mb-2'>
                            <label className='form-label'>
                                Name
                            </label>
                            <input type="textbox" className='form-control' onChange={namehandleChange} value={name} required></input>
                            <div className='invalid-feedback'>
                                Please enter your full name
                            </div>
                        </div>
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
                            <label htmlFor='password' className='form-label' >
                                Password
                            </label>
                            <input type="password" className='form-control' onChange={PasswordhandleChange} value={password} required></input>
                            <div className='invalid-feedback'>
                                Please enter your password
                            </div>
                        </div>
                        <div className='form-group was-validated mb-2' >
                            <label htmlFor='password' className='form-label'>
                                Re-Enter Password
                            </label>
                            <input type="password" className='form-control' onChange={RePasswordhandleChange} value={repassword} required>
                            </input>
                            <div>
                                {
                                    password === repassword ? (
                                        <p>setpasscheck("matched")</p>
                                    ) : (
                                        <p>setpasscheck("not matched")</p>
                                    )
                                }
                            </div>
                            <div className='invalid-feedback'>
                                Please enter password again
                            </div>
                        </div>
                        <button type="submit" classname="btn btn-success w-100 mt-2" onClick={Registerhandler}>Register</button>
                        <p>Already Existing User <Link to="/login">sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;