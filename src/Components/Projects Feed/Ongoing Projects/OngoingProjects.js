import { Box } from '@mui/material'
import React, { useState } from 'react'
import { StyledButton } from '../../Styled MUI components/StyledButton'
import AddIcon from '@mui/icons-material/Add';
import NewProjectModal from './NewProjectModal';
import Projects from './Projects';

function OngoingProjects() {
    const [isNPModalOpen, setIsNPModalOpen] = useState(false)

    return (
        <Box flex={4} p={5} sx={{ overflowY: 'scroll', paddingBottom: 20 }}>
            <StyledButton onClick={() => setIsNPModalOpen(true)} variant='contained' color='primary' startIcon={<AddIcon />} sx={{ height: 40, textTransform: 'none', float: 'right', marginRight: 7 }}>New Project</StyledButton>
            <NewProjectModal open={isNPModalOpen} onClose={() => setIsNPModalOpen(false)} />
            <Projects />
        </Box>
    )
}

export default OngoingProjects