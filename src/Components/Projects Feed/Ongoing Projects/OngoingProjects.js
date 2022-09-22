import { Box, CircularProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledButton } from '../../Styled MUI components/StyledButton'
import AddIcon from '@mui/icons-material/Add';
import NewProjectModal from './NewProjectModal';
import axios from 'axios';
import OngoingCard from './OngoingCard';
import { useAuth } from '../../../contexts/AuthContext';

function OngoingProjects() {
    const [isNPModalOpen, setIsNPModalOpen] = useState(false)
    const { user } = useAuth()
    const [projects, setProjects] = useState({})

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('https://project-deadlines.herokuapp.com/projects/ongoing?userEmail=' + user.result.email)
            setProjects(projectInfo.data)
        }
        getProjectInfo()
    })

    return (
        <Box flex={4} p={5} sx={{ overflowY: 'scroll', paddingBottom: 20 }}>
            <StyledButton onClick={() => setIsNPModalOpen(true)} variant='contained' color='primary' startIcon={<AddIcon />} sx={{ height: 40, textTransform: 'none', float: 'right', marginRight: 7 }}>New Project</StyledButton>
            <NewProjectModal open={isNPModalOpen} onClose={() => setIsNPModalOpen(false)} />
            {
                !projects.length ?
                    <CircularProgress size={50} />
                    : (
                        <>
                            {
                                Object.entries(projects).map(([key, value]) => {
                                    return (
                                        <Stack key={key} width='100%' spacing={6} sx={{ marginTop: 10 }}>
                                            <OngoingCard project={value} />
                                        </Stack>
                                    )
                                })
                            }
                        </>
                    )
            }
        </Box>
    )
}

export default OngoingProjects