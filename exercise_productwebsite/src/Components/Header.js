import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { AppBar, Tabs, Tab, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import TitleIcon from '@mui/material/Icon'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '27ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const navItems = ['Product', 'Login', 'Register'];

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let navigate = useNavigate();

    const handleNavItemClick = (item) => {
        navigate(`/${item.toLowerCase()}`);
        handleClose();
    };


    return (
        <Box sx={{ flexGrow: 1, marginBottom:"65px"}}>
            <AppBar position='fixed' sx={{background:"#33ffff"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>

                    <img onClick={() => navigate("/")} className="logo-img" src="./Assets/Header/CompanyLogo.png" alt='companylogo'>
                    </img>

                    <Typography variant="h6" noWrap component="div" 
                    onClick={() => navigate("/")} 
                    sx={{ flexGrow: 1, display: { xs: "initial", sm: "block" } }}>
                        <span className='logo-text'>BuyPro</span>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search products here..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <ShoppingCartIcon sx={{ marginLeft: "40px", marginRight:"4px", color:"black"}} />
                    <span style={{color:"black", marginRight:"10px"}}>Cart</span>
                    {/* <TitleIcon sx={{paddingRight:"11px", fontSize:"1rem", color:"black"}}>Cart</TitleIcon> */}
                    <Box sx={{ display: { xs: "none", sm: "flex" }}}>
                        {navItems.map((item) => (
                            <Button key={item} style={{ marginRight: "7px", color:"black" }} variant="outlined" size="small" sx={{ color: "inherit" }} onClick={() => handleNavItemClick(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    {/* <Button onClick={loginpage()} sx={{ marginLeft: "auto" }} variant='outlined'>
                        Login
                    </Button>
                    <Button sx={{ marginLeft: "auto"}} variant='outlined'>
                        Register
                    </Button> */}
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ display: { xs: "block", sm: "none" } }}
            >
                {navItems.map((item) => (
                    <MenuItem key={item} onClick={() => handleNavItemClick(item)}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
