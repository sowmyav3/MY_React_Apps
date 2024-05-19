import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { useNavigate } from "react-router-dom";
import './App'
import './App.css'

export default function Header() {

    const [open, setOpen] = React.useState(false);

    const handleOpenChange = React.useCallback((event, isOpen) => {
        setOpen(isOpen);
    }, []);
    const [item, setItem] = useState("Home");
    let navigate = useNavigate();

    const handleNavItemClick = (path) => {
        navigate(`/${path}`);
        setItem(path);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    <img onClick={() => { handleNavItemClick('home') }} className="logo-img" src="./weathericon.png" alt="Weather App" />
                    Weather App
                    </Typography>
                    <Dropdown open={open} onOpenChange={handleOpenChange}>
                        <MenuButton>{item}</MenuButton>
                        <Menu>
                            <MenuItem onClick={() => handleNavItemClick('home')
                            }>Home</MenuItem>
                            <MenuItem onClick={() => handleNavItemClick('eventPlan')}>Event Planners</MenuItem>
                            <MenuItem onClick={() => handleNavItemClick('farmer')}>Farmers</MenuItem>
                            <MenuItem onClick={() => handleNavItemClick('travel')}>Travellers</MenuItem>
                        </Menu>
                    </Dropdown>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
