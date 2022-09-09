import { AppBar, Typography, Avatar, Stack } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { StyledToolbar } from '../Styled MUI components/StyledToolbar'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth'
import { useNavigate, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import axios from 'axios'

function TopAppBar() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        async function getUserInfo() {
            const request = await axios.get(`http://localhost:5000/user/?email=jonwick@gmail.com`)
            setUser(request.data[0])
        }
        getUserInfo()
    }, [location])

    console.log(user)
    /* move logout function to this page and bring back the localstorage method of storing user info */

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Stack spacing={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {
                        user && <>
                            <Avatar>E</Avatar>
                            <Typography variant='h6'>{user.name}</Typography>
                        </>
                    }

                </Stack>
                <Typography variant='h3' component={Link} to='/' color='primary' sx={{ textDecoration: 'none' }}>PROJECT DEADLINES</Typography>
                {
                    user ?
                        <StyledButton onClick={logout(setUser, navigate)} variant='contained' color='primary' sx={{ height: 50, float: 'right' }}>Logout</StyledButton>
                        : <StyledButton component={Link} to='/auth' variant='contained' color='primary' sx={{ height: 50, float: 'right' }}>Sign in</StyledButton>
                }
            </StyledToolbar>
        </AppBar>
    )
}

export default TopAppBar