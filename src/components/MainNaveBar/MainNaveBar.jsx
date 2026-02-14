import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MainDark from '../header/mainDark.jsx';
import MainTranslation from "../header/mainTranslation.jsx";
import { Link } from "react-router-dom"; // ✅ use react-router-dom

const pages = [
  { label: "Our Events", to: "/OurEvents" },
  { label: "Top Songs", to: "/top-songs" },
  { label: "Contact us", to: "/contact" },
];

function MainNaveBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ color: 'text.primary' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 100,
                            letterSpacing: '.3rem',
                            fontSize: '1.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        IRFAN Club
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                  key={page.to}
                                  component={Link}
                                  to={page.to}
                                  onClick={handleCloseNavMenu}
                                >
                                  <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 1000,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        IRFAN Club
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },
                    justifyContent:`center`,
                    gap: 2
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.to}
                component={Link}
                to={page.to}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' ,gap:1}}>
                        <MainDark />
                        <MainTranslation/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MainNaveBar;