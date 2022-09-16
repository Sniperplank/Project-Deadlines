import { CircularProgress, Stack } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import OngoingCard from './OngoingCard'

function Projects() {
    const { user } = useAuth()
    const [projects, setProjects] = useState({})

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('http://localhost:5000/projects/ongoing?userEmail=' + user.result.email)
            setProjects(projectInfo.data)
        }
        getProjectInfo()
    })

    return (
        !projects.length ?
            <CircularProgress size={50}/>
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
    )
}

export default Projects