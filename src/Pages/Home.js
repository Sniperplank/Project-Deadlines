import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledButton } from '../Components/Styled MUI components/StyledButton'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext';
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../actions/auth';

function Home() {
    const { user } = useAuth()
    const { isDarkMode } = useTheme()
    const [timeOfDay, setTimeOfDay] = useState('')
    const date = new Date()
    const hours = date.getHours()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (hours < 12) {
            setTimeOfDay('morning')
        } else if (hours >= 12 && hours < 17) {
            setTimeOfDay('afternoon')
        } else {
            setTimeOfDay('evening')
        }
    }, [hours])

    return (
        <Stack spacing={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} p={{ xs: 1, sm: 10 }} pl={{ xs: 1, sm: 20 }} pr={{ xs: 1, sm: 20 }}>
            <Typography variant='h4' textAlign='center' color='primary'>Good {timeOfDay}, {user ? user.result.name : 'sign in to get started'}</Typography>
            <hr style={{ width: '50%' }}></hr>
            <Stack spacing={5} sx={{ width: { xs: '90%', sm: '70%' }, height: 400, background: isDarkMode ? 'linear-gradient(209deg, rgba(38,35,29,1) 18%, rgba(78,54,22,1) 57%, rgba(113,71,16,1) 88%, rgba(147,87,10,1) 100%)' : 'linear-gradient(209deg, rgba(250,246,237,1) 18%, rgba(250,221,182,1) 57%, rgba(250,198,131,1) 88%, rgba(250,174,76,1) 100%)', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 40px #fb8c00' }}>
                <Typography variant='h6' textAlign='center'>Planning and managing projects made easier. With this app, you can set deadlines to your projects and plan them accordingly so you can finish them on time. </Typography>
                <StyledButton component={Link} to={user ? '/ongoing' : '/auth'} variant='contained' color='primary' sx={{ height: 40 }}>get started</StyledButton>
                {
                    !user && <> <StyledButton variant='contained' color='primary' sx={{ height: 40 }} onClick={() => {
                        signin({ email: 'test@gmail.com', password: '123' }, navigate, setError)
                    }}>Dummy Account</StyledButton>
                        <Typography variant='h6' color='error'>{error}</Typography>
                    </>
                }
            </Stack>
        </Stack>
    )
}

export default Home