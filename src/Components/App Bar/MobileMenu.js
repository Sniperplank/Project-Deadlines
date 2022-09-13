import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { MenuButton } from '../Styled MUI components/MenuButton'
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { CardBox } from '../Styled MUI components/CardBox'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { useTheme } from '../../contexts/ThemeContext'
import { StyledIconButton } from '../Styled MUI components/StyledIconButton'

function MobileMenu({ logout, onClose }) {
    const { user } = useAuth()
    const { isDarkMode, setIsDarkMode } = useTheme()

    return (
        <Stack spacing={2} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            {
                user ? (<>
                    <Typography variant='h5' align='center'>Projects</Typography>
                    <MenuButton component={Link} to='/ongoing' onClick={onClose} variant='outlined' color='primary'>Ongoing</MenuButton>
                    <MenuButton component={Link} to='/finished' onClick={onClose} variant='outlined' color='primary'>Finished</MenuButton>
                    <MenuButton component={Link} to='/aborted' onClick={onClose} variant='outlined' color='primary'>Aborted</MenuButton>
                </>) : (
                    <CardBox display='flex' alignItems='center'>
                        <Typography variant='h5' align='center'>Sign in to see projects!</Typography>
                    </CardBox>
                )
            }
            <hr></hr>
            <MenuButton component={Link} to='/' onClick={onClose} variant='outlined' color='primary' startIcon={<HomeIcon />}>Home</MenuButton>
            <MenuButton component={Link} to='/about' onClick={onClose} variant='outlined' color='primary' startIcon={<InfoIcon />}>About</MenuButton>
            <MenuButton href="https://github.com/Sniperplank" variant='outlined' color='primary' startIcon={<GitHubIcon />}>GitHub</MenuButton>
            <Stack spacing={2} direction='row'>
                <StyledIconButton onClick={() => { setIsDarkMode(false) }}>
                    <LightModeIcon color={isDarkMode ? 'primary' : 'black'} />
                </StyledIconButton>
                <StyledIconButton onClick={() => { setIsDarkMode(true) }}>
                    <ModeNightIcon color={isDarkMode ? 'black' : 'primary'} />
                </StyledIconButton>
            </Stack>
            <hr></hr>
            {
                user ?
                    <StyledButton onClick={() => {
                        logout()
                        onClose()
                    }} variant='contained' color='primary' sx={{ height: 40 }}>Logout</StyledButton>
                    : <StyledButton component={Link} to='/auth' onClick={onClose} variant='contained' color='primary' sx={{ height: 40 }}>Sign in</StyledButton>
            }
        </Stack >
    )
}

export default MobileMenu