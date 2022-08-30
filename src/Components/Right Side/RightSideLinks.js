import React from 'react'
import { Box, Stack } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import GitHubIcon from '@mui/icons-material/GitHub';
import { StyledIconButton } from '../Styled MUI components/StyledIconButton';
import { Link } from 'react-router-dom'

function RightSideLinks({ setIsDarkMode }) {
    return (
        <Box flex={1} justifyContent="center" sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack sx={{ width: 100, marginTop: 25 }} spacing={6}>
                <StyledIconButton component={Link} to='/about'>
                    <InfoIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton href="https://github.com/Sniperplank">
                    <GitHubIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton onClick={() => { setIsDarkMode(false) }}>
                    <LightModeIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton onClick={() => { setIsDarkMode(true) }}>
                    <ModeNightIcon color='primary' />
                </StyledIconButton>
            </Stack>
        </Box>
    )
}

export default RightSideLinks