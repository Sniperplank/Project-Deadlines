import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { CardBox } from '../Styled MUI components/CardBox'
import { StyledInput } from '../Styled MUI components/StyledInput'
import { StyledButton } from '../Styled MUI components/StyledButton'

function Auth() {
    const [isSignup, setIsSignup] = useState(false)

    const switchMode = () => {
        setIsSignup((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Box flex={5} display='flex' justifyContent='center' alignItems='center' paddingBottom={10}>
            <CardBox>
                <Typography variant='h5' paddingBottom={3}>{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form>
                    <Stack spacing={3}>
                        {
                            isSignup && (
                                <Stack direction='row' spacing={2}>
                                    <StyledInput variant='outlined' name='firstName' label='First Name' autoFocus />
                                    <StyledInput variant='outlined' name='lastName' label='Last Name' />
                                </Stack>
                            )
                        }
                        <StyledInput variant='outlined' name='email' label='Email' type='email' />
                        <StyledInput variant='outlined' name='password' label='Password' type='password' />
                        {isSignup && <StyledInput variant='outlined' name='confirmPassword' label='Confirm Password' type='password' />}
                        <StyledButton type='submit' fullWidth variant='contained' color='primary' onClick={handleSubmit}>
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