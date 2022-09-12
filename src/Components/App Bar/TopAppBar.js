import { AppBar, Typography, Avatar, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { StyledToolbar } from '../Styled MUI components/StyledToolbar'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import { useAuth } from '../../contexts/AuthContext'
import MobileMenu from './MobileMenu'
import MenuIcon from '@mui/icons-material/Menu';
import { StyledIconButton } from '../Styled MUI components/StyledIconButton'

function TopAppBar() {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const logout = () => {
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        // const token = user?.token
        // if (token) {
        //     const decodedToken = decode(token)
        //     if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        // }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Stack spacing={1}>
                    {
                        user && <>
                            <Avatar>{user.result.name.charAt(0)}</Avatar>
                            <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>{user.result.name}</Typography>
                        </>
                    }

                </Stack>
                <Typography variant='h3' component={Link} to='/' color='primary' sx={{ textDecoration: 'none', fontSize: { xs: 20, sm: 48 } }}>PROJECT DEADLINES</Typography>
                {
                    user ?
                        <StyledButton onClick={logout} variant='contained' color='primary' sx={{ height: 50, float: 'right', display: { xs: 'none', sm: 'block' } }}>Logout</StyledButton>
                        : <StyledButton component={Link} to='/auth' variant='contained' color='primary' sx={{ height: 50, float: 'right' }}>Sign in</StyledButton>
                }
                <StyledIconButton component={Link} to='/' sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <MenuIcon color='primary' />
                </StyledIconButton>
            </StyledToolbar>
        </AppBar>
    )
}

export default TopAppBar