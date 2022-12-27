import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FinishedCard from './FinishedCard';
import { useAuth } from '../../../contexts/AuthContext';

function FinishedProjects() {
    const { user } = useAuth()
    const [projects, setProjects] = useState({})

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('https://project-deadlines-server.vercel.app/projects/finished?userEmail=' + user.result.email)
            setProjects(projectInfo.data)
        }
        getProjectInfo()
    })

    return (
        <Box p={{ xs: 1, sm: 10 }} pl={{ xs: 1, sm: 20 }} pr={{ xs: 1, sm: 20 }}>
            <Typography variant='h4' color='primary' textAlign='center'>Finished Projects</Typography>
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