import * as React from 'react';
import '../App.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ProductOffer from './Homesubcomponents/ProductOffer';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
        label: 'limitoffer',
        imgPath: './Assets/Home/Homebanner1.jpg',
    },
    {
        label: 'Redmioffer',
        imgPath: './Assets/Home/Homebanner2.jpg',
    },
    {
        label: 'Xboxoffer',
        imgPath: './Assets/Home/Homebanner3.jpg',
    },
    {
        label: 'Groceryoffer',
        imgPath: './Assets/Home/Homebanner4.jpg',
    },
    {
        label: 'bathwashes',
        imgPath: './Assets/Home/Homebanner5.jpg',
    },
    {
        label: 'watch',
        imgPath: './Assets/Home/Homebanner6.jpg',
    },
];

function Home(props) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className='wrapper'>

            {/* Banner imagesscroll */}
            <div sx={{ maxWidth: 100005, flexGrow: 1 }}>
                

                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents

                    >
                        {
                            images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 255,
                                                display: 'block',
                                                maxWidth: 100005,
                                                overflow: 'hidden',
                                                width: '100vw',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>

                            ))}

                    </AutoPlaySwipeableViews>
                
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    variant='none'
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}
                            sx={{
                                position: 'absolute',
                                left: '0',
                                transform: 'translateX(-50%)',
                                top: '25%',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                            }}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}

                        </Button>
                    }
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            sx={{
                                position: 'absolute',
                                right: '0',
                                transform: 'translateX(50%)',
                                top: '25%',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                            }}
                        >

                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                />



            </div>
            {/* offer on products */}
            <div>
            <ProductOffer></ProductOffer>
            </div>
            {/*  scroll cards */}

            

        </div>
    );
}

export default Home;





// import { useEffect, useState } from "react";
// import "./styles.css";
// import axios from "axios";

// export default function App() {
// const [data, setData] = useState(null);

// useEffect(() => {
// const fetchData = async () => {
// try {
// const response = await axios.get(`https://fakestoreapi.com/products`);
// setData(response.data);
// console.log(response.data);
// } catch (error) {
// console.error("Error Occured", error);
// }
// };
// fetchData();
// }, []);
// return (
// <div>
// {data && (
// <ul>
// {data.map((item) => (
// <li key={item.id}>
// <h3>{item.category}</h3>
// <img
// src={item.image}
// style={{ height: "60px", width: "60px" }}
// ></img>
// </li>
// ))}
// //{" "}
// </ul>
// )}
// </div>
// );
// }