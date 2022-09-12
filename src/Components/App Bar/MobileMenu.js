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

function MobileMenu({ logout }) {
    const { user, setUser } = useAuth()

    return (
        <Stack spacing={2} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <Typography variant='h5'>Projects</Typography>
            <MenuButton component={Link} to='/ongoing' variant='outlined' color='primary'>Ongoing</MenuButton>
            <MenuButton component={Link} to='/finished' variant='outlined' color='primary'>Finished</MenuButton>
            <MenuButton component={Link} to='/aborted' variant='outlined' color='primary'>Aborted</MenuButton>
            <hr></hr>
            <MenuButton component={Link} to='/' variant='outlined' color='primary' startIcon={<HomeIcon />}>Home</MenuButton>
            <MenuButton component={Link} to='/about' variant='outlined' color='primary' startIcon={<InfoIcon />}>About</MenuButton>
            <MenuButton href="https://github.com/Sniperplank" variant='outlined' color='primary' startIcon={<GitHubIcon />}>GitHub</MenuButton>
            <hr></hr>
            {
                user ?
                    <MenuButton onClick={logout} variant='contained' color='primary'>Logout</MenuButton>
                    : <MenuButton component={Link} to='/auth' variant='contained' color='primary'>Sign in</MenuButton>
            }
        </Stack>
    )
}

export default MobileMenu