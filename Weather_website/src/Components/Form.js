import React, { useState } from 'react'
import { Box, InputBase, Button, styled, colors } from '@mui/material';
import { getWeather } from '../Services/dataApi';
import { BorderOuter, Height, Margin } from '@mui/icons-material';
import './Form.css';
const Container = styled(Box)({
    background: '#FBBF77',
    padding: 10,
})

const Input = styled(InputBase)({
    color: 'black',
    marginRight: 20,
    fontSize: 18,
});

const GetButton = styled(Button)({
    background: '#FBBF77',
    color: 'black',
    '&:hover': {
        color: 'white',
        border: '1px solid black',
        background: '#ed8c17',
      },
})


export default function Form({ setResult }) {
    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (
        <Container>
            <Input
                id="myInputhold"
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            <Input
                id="myInputhold"
                placeholder="Country"
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