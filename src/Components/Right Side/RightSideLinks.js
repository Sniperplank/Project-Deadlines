import React from 'react'
import { Box, Stack } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { StyledIconButton } from '../Styled MUI components/StyledIconButton';
import { Link } from 'react-router-dom'

function RightSideLinks({ isDarkMode, setIsDarkMode }) {
    return (
        <Box flex={1} justifyContent="center" sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack sx={{ width: 100, marginTop: 25 }} spacing={6}>
                <StyledIconButton component={Link} to='/'>
                    <HomeIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton component={Link} to='/about'>
                    <InfoIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton href="https://github.com/Sniperplank">
                    <GitHubIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton onClick={() => { setIsDarkMode(false) }}>
                    <LightModeIcon color={isDarkMode ? 'primary' : 'secondary'} />
                </StyledIconButton>
                <StyledIconButton onClick={() => { setIsDarkMode(true) }}>
                    <ModeNightIcon color={isDarkMode ? 'secondary' : 'primary'} />
                </StyledIconButton>
            </Stack>
        </Box>
    )
}

export default RightSideLinks