import { AppBar, Typography, Avatar, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { StyledToolbar } from '../Styled MUI components/StyledToolbar'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

function TopAppBar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
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
    }, [location])

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Stack spacing={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {
                        user && <>
                            <Avatar>{user.result.name.charAt(0)}</Avatar>
                            <Typography variant='h6'>{user.result.name}</Typography>
                        </>
                    }

                </Stack>
                <Typography variant='h3' component={Link} to='/' color='primary' sx={{ textDecoration: 'none' }}>PROJECT DEADLINES</Typography>
                {
                    user ?
                        <StyledButton onClick={logout} variant='contained' color='primary' sx={{ height: 50, float: 'right' }}>Logout</StyledButton>
                        : <StyledButton component={Link} to='/auth' variant='contained' color='primary' sx={{ height: 50, float: 'right' }}>Sign in</StyledButton>
                }
            </StyledToolbar>
        </AppBar>
    )
}

export default TopAppBar