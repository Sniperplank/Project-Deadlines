import { AppBar, Typography, Avatar, Stack } from '@mui/material'
import React from 'react'
import { StyledButton } from '../Styled MUI components/StyledButton'
import { StyledToolbar } from '../Styled MUI components/StyledToolbar'
import { Link } from 'react-router-dom'

function TopAppBar() {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Stack spacing={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Avatar>E</Avatar>
                    <Typography variant='h6'>Eilaf Aljundi</Typography>
                </Stack>
                <Typography variant='h3' component={Link} to='/' color='primary' sx={{ textDecoration: 'none' }}>PROJECT DEADLINES</Typography>
                <StyledButton variant='contained' color='primary' sx={{ height: 50, float: 'right' }}>Sign in</StyledButton>
            </StyledToolbar>
        </AppBar>
    )
}

export default TopAppBar