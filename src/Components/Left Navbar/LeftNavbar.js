import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { Link } from 'react-router-dom'

function LeftNavbar() {
    return (
        <Box flex={1} justifyContent="center" sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack sx={{ width: 100, marginTop: 20 }} spacing={6}>
                <Typography variant='h5' align='center'>Projects</Typography>
                <StyledButton component={Link} to='/ongoing' variant='contained' color='primary'>Ongoing</StyledButton>
                <StyledButton component={Link} to='/finished' variant='contained' color='primary'>Finished</StyledButton>
                <StyledButton component={Link} to='/aborted' variant='contained' color='primary'>Aborted</StyledButton>
            </Stack>
        </Box>
    )
}

export default LeftNavbar