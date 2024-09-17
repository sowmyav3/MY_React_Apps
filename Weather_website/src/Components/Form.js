import React, { useState } from 'react'
import { Box, InputBase, Button, styled, colors } from '@mui/material';
import { getWeather } from '../Services/dataApi';
import './Form.css';


const Container = styled(Box)({
    background: '#FBBF77',
    padding: 10,
})

const Input = styled(InputBase)({
    color: 'black',
    marginRight: 20,
    fontSize: 18,
    border: '1px solid black',
});

const GetButton = styled(Button)({
    background: '#FBBF77',
    color: 'black',
    border: '1px solid black',
    '&:hover': {
        color: 'white',
        border: '1px solid black',
        background: '#ed8c17',
    },
})


export default function Form({ setResult}) {
    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [err,setErr]=('');

    const getWeatherInfo = async () => {
        try {
            if (!data.city ) {
                throw new Error("Please enter city");
            }
            let response = await getWeather(data.city, data.country);
            setResult(response);
        } catch (error) {
            alert("Please Enter city");
        }
    }

    return (
        <Container>
            <Input
                id="myInputhold"
                placeholder="Enter City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            <Input
                id="myInputhold"
                placeholder="Enter Country"
                onChange={(e) => handleChange(e)}
                name="Country"
            />
            <GetButton
                placeholder="contained"
                onClick={() => getWeatherInfo()}
            >
                Get weather
            </GetButton>
            
        </Container>
    )
}
