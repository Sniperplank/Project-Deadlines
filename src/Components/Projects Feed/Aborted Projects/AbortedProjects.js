import { Box, CircularProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AbortedCard from './AbortedCard';
import { useAuth } from '../../../contexts/AuthContext';

function AbortedProjects() {
    const { user } = useAuth()
    const [projects, setProjects] = useState({})

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('https://project-deadlines-server.vercel.app/projects/aborted?userEmail=' + user.result.email)
            setProjects(projectInfo.data)
        }
        getProjectInfo()
    })

    return (
        <Box p={10}>
            {
                !projects.length ?
                    <CircularProgress size={50} />
                    : (
                        <>
                            {
                                Object.entries(projects).map(([key, value]) => {
                                    return (
                                        <Stack key={key} width='100%' spacing={6} sx={{ marginTop: 10 }}>
                                            <AbortedCard project={value} />
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

export default AbortedProjects