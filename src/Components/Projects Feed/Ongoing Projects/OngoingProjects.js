import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { StyledButton } from '../../Styled MUI components/StyledButton'
import AddIcon from '@mui/icons-material/Add';
import OngoingCard from '../Ongoing Projects/OngoingCard';
import NewProjectModal from './NewProjectModal';

function OngoingProjects() {
    const [isNPModalOpen, setIsNPModalOpen] = useState(false)
    return (
        <Box flex={4} p={5}>
            <StyledButton onClick={() => setIsNPModalOpen(true)} variant='contained' color='primary' startIcon={<AddIcon />} sx={{ height: 40, textTransform: 'none', float: 'right', marginRight: 7 }}>New Project</StyledButton>
            <NewProjectModal open={isNPModalOpen} onClose={() => setIsNPModalOpen(false)} />
            <Stack width='100%' spacing={6} sx={{ marginTop: 10 }}>
                <OngoingCard />
            </Stack>
        </Box>
    )
}

export default OngoingProjects