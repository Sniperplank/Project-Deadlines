import { Box, Stack } from '@mui/material'
import React from 'react'
import FinishedCard from './FinishedCard'

function FinishedProjects() {
    return (
        <Box flex={4} p={5}>
            <Stack width='100%' spacing={6} sx={{ marginTop: 10 }}>
                <FinishedCard />
            </Stack>
        </Box>
    )
}

export default FinishedProjects