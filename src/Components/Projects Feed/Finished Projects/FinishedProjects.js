import { Box, CircularProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FinishedCard from './FinishedCard';
import { useAuth } from '../../../contexts/AuthContext';

function FinishedProjects() {
    const { user } = useAuth()
    const [projects, setProjects] = useState({})

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('http://localhost:5000/projects/finished?userEmail=' + user.result.email)
            setProjects(projectInfo.data)
        }
        getProjectInfo()
    })

    return (
        <Box flex={4} p={5} sx={{ overflowY: 'scroll', paddingBottom: 20 }}>
            {
                !projects.length ?
                    <CircularProgress size={50} />
                    : (
                        <>
                            {
                                Object.entries(projects).map(([key, value]) => {
                                    return (
                                        <Stack key={key} width='100%' spacing={6} sx={{ marginTop: 10 }}>
                                            <FinishedCard project={value} />
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

export default FinishedProjects