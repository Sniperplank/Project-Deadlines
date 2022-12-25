import { AppBar, Typography, Avatar, Stack } from '@mui/material'
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

function TopAppBar() {
    const { user, setUser } = useAuth()
    const { isDarkMode, setIsDarkMode } = useTheme()
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

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
                        // user && <>
                        //     <Avatar>{user.result.name.charAt(0)}</Avatar>
                        //     <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>{user.result.name}</Typography>
                        // </>
                        user ?
                            <Stack spacing={3} direction='row'>
                                <NavButton component={Link} to='/ongoing' variant='text'>Ongoing</NavButton>
                                <NavButton component={Link} to='/finished' variant='text'>Finished</NavButton>
                                <NavButton component={Link} to='/aborted' variant='text'>Aborted</NavButton>
                            </Stack>
                            : <Typography variant='h6' align='center' sx={{ display: { xs: 'none', sm: 'flex' } }}>Sign in to see projects!</Typography>
                    }

                </Stack>
                {
                    user ?
                        <Stack spacing={3} direction='row' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <StyledIconButton component={Link} to='/about'>
                                <InfoIcon color='primary' />
                            </StyledIconButton>
                            <StyledIconButton href="https://github.com/Sniperplank/Project-Deadlines">
                                <GitHubIcon color='primary' />
                            </StyledIconButton>
                            <StyledIconButton onClick={() => { setIsDarkMode(prev => !prev) }}>
                                {isDarkMode ? <LightModeIcon color={'primary'} /> : <ModeNightIcon color={'primary'} />}
                            </StyledIconButton>
                            <Avatar>{user.result.name.charAt(0)}</Avatar>
                            {/* <StyledButton onClick={logout} variant='contained' color='primary' sx={{ height: 50, float: 'right', display: { xs: 'none', sm: 'block' } }}>Logout</StyledButton> */}
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