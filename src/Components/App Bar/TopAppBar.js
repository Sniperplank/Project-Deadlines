import { AppBar, Typography, Avatar, Stack, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { StyledToolbar } from '../Styled MUI components/StyledToolbar'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import { useAuth } from '../../contexts/AuthContext'
import MenuIcon from '@mui/icons-material/Menu';
import { StyledIconButton } from '../Styled MUI components/StyledIconButton'
import MenuModal from './MenuModal'
import { NavButton } from '../Styled MUI components/NavButton'
import { useTheme } from '../../contexts/ThemeContext'
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logout from '@mui/icons-material/Logout';

function TopAppBar() {
    const { user, setUser } = useAuth()
    const { isDarkMode, setIsDarkMode } = useTheme()
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const location = useLocation()

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location, setUser, user?.token])

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h5' component={Link} to='/' color='primary' sx={{ textDecoration: 'none', fontWeight: 'bold', fontSize: { xs: 20, sm: 27 } }}>Project Deadlines</Typography>
                <Stack spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {
                        user &&
                            <Stack spacing={3} direction='row'>
                                <NavButton component={Link} to='/ongoing' variant='text'>Ongoing</NavButton>
                                <NavButton component={Link} to='/finished' variant='text'>Finished</NavButton>
                                <NavButton component={Link} to='/aborted' variant='text'>Aborted</NavButton>
                            </Stack>
                    }
                </Stack>
                {
                    user ?
                        <Stack spacing={3} direction='row' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <StyledIconButton component={Link} to='/about'>
                                <InfoIcon color='primary' />
                            </StyledIconButton>
                            <StyledIconButton onClick={() => openInNewTab('https://github.com/Sniperplank/Project-Deadlines')}>
                                <GitHubIcon color='primary' />
                            </StyledIconButton>
                            <StyledIconButton onClick={() => { setIsDarkMode(prev => !prev) }}>
                                {isDarkMode ? <LightModeIcon color={'primary'} /> : <ModeNightIcon color={'primary'} />}
                            </StyledIconButton>
                            <StyledIconButton onClick={handleClick}
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}>
                                <Avatar>{user.result.name.charAt(0)}</Avatar>
                            </StyledIconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        backgroundColor: 'secondary.light',
                                        color: 'text.main',
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'secondary.light',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <Avatar /> {user.result.name}
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={logout}>
                                    <ListItemIcon>
                                        <Logout color='primary' />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Stack>
                        : <StyledButton component={Link} to='/auth' variant='contained' color='primary' sx={{ height: 40, display: { xs: 'none', sm: 'flex' } }}>Sign in</StyledButton>
                }
                <StyledIconButton onClick={() => setIsMenuModalOpen(!isMenuModalOpen)} sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <MenuIcon color='primary' />
                </StyledIconButton>
                <MenuModal open={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} logout={logout} />
            </StyledToolbar>
        </AppBar>
    )
}

export default TopAppBar