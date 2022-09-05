import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
import { CardBox } from '../Styled MUI components/CardBox'
import { StyledInput } from '../Styled MUI components/StyledInput'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { signin, signup } from '../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function Auth() {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    const switchMode = () => {
        setIsSignup((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            signup(formData, navigate)
        } else {
            signin(formData, navigate)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Box flex={5} display='flex' justifyContent='center' alignItems='center' paddingBottom={10}>
            <CardBox>
                <Typography variant='h5' paddingBottom={3}>{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        {
                            isSignup && (
                                <Stack direction='row' spacing={2}>
                                    <StyledInput variant='outlined' name='firstName' label='First Name' onChange={handleChange} autoFocus />
                                    <StyledInput variant='outlined' name='lastName' label='Last Name' onChange={handleChange} />
                                </Stack>
                            )
                        }
                        <StyledInput variant='outlined' name='email' label='Email' onChange={handleChange} type='email' />
                        <StyledInput variant='outlined' name='password' label='Password' onChange={handleChange} type='password' />
                        {isSignup && <StyledInput variant='outlined' name='confirmPassword' label='Confirm Password' onChange={handleChange} type='password' />}
                        <StyledButton type='submit' fullWidth variant='contained' color='primary'>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </StyledButton>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign in' : 'Dont have an account? Sign up'}
                        </Button>
                    </Stack>
                </form>
            </CardBox>
        </Box>
    )
}

export default Auth