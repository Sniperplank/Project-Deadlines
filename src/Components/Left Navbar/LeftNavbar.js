import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { CardBox } from '../Styled MUI components/CardBox'

function LeftNavbar() {
    const { user } = useAuth()

    return (
        <Box flex={1} justifyContent="center" sx={{ display: { xs: "none", sm: "flex" } }}>
            {
                user ? (<>
                    <Stack sx={{ width: 100, marginTop: 20 }} spacing={6}>
                        <Typography variant='h5' align='center'>Projects</Typography>
                        <hr></hr>
                        <StyledButton component={Link} to='/ongoing' variant='contained' color='primary'>Ongoing</StyledButton>
                        <StyledButton component={Link} to='/finished' variant='contained' color='primary'>Finished</StyledButton>
                        <StyledButton component={Link} to='/aborted' variant='contained' color='primary'>Aborted</StyledButton>
                    </Stack>
                </>) :
                    (
                        <CardBox height={400} marginTop={20} display='flex' alignItems='center'>
                            <Typography variant='h5' align='center'>Sign in to see projects!</Typography>
                        </CardBox>
                    )
            }
        </Box>
    )
}

export default LeftNavbar