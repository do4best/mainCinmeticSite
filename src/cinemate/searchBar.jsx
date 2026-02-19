import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuIcon, Container, Avatar, Button, Tooltip, MenuItem, AdbIcon, SearchIcon, styled, InputBase } from './materialImport.js'
import {useNavigate} from "react-router-dom";
import {useSearchParams} from "react-router";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
function SearchBar() {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [query, setQuery] = React.useState(searchParams.get('q') || '');
    React.useEffect(() => {
        setQuery(searchParams.get('q') || '');
    },[searchParams])

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value;
            if (query) {
                navigate(`/search?q=${query}`);
            }
        }
    };

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    //
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    //
    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };
    //
    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
    const handelSubmit = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        e.target.reset()
        if (query) {
            return navigate(`/search?q=${query}`);
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center',alignContent:'center', gap: 2 }}>
                <Search onSubmit={handelSubmit} sx={{
                    mr: 2,
                    mt: 3,
                    width: '80%',
                    flex: 1,
                    display: { xs: 'none', md: 'flex' },
                    border: '1px solid',
                    alignItems: 'center',
                    height: 40,
                    color: '#fff',
                }} name="search" id="search">

                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyDown={handleSearch}
                    />
                </Search>
                <Button variant="contained" sx={{mt:3}}>Search</Button>
            </Box></>
    );
}

export default SearchBar;