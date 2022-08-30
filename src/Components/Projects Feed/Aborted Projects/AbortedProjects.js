import { Box, Stack } from '@mui/material'
import React from 'react'
import AbortedCard from './AbortedCard'

function AbortedProjects() {
    return (
        <Box flex={4} p={5}>
            <Stack width='100%' spacing={6} sx={{ marginTop: 10 }}>
                <AbortedCard />
            </Stack>
        </Box>
    )
}

export default AbortedProjects