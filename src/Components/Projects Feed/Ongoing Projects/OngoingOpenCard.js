import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { StyledIconButton } from '../../Styled MUI components/StyledIconButton';
import Task from './Task';
import { StyledButton } from '../../Styled MUI components/StyledButton';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import '../../../App.css'
import TaskModal from './TaskModal';
import DescEditModal from './DescEditModal';
import { useAuth } from '../../../contexts/AuthContext';
import { StyledInput } from '../../Styled MUI components/StyledInput';

function OngoingOpenCard() {
    const { user } = useAuth()
    const { projectId } = useParams()
    const [project, setProject] = useState({})
    const [tasks, setTasks] = useState({})
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
    const [isDescEditModalOpen, setIsDescEditModalOpen] = useState(false)
    const navigate = useNavigate()

    const finishProject = async () => {
        navigate('/ongoing')
        await axios.post('https://project-deadlines-server.vercel.app/projects/finished', { name: project.name, description: project.description, startDate: project.startDate, endDate: moment(), userEmail: user.result.email })
        await axios.delete('https://project-deadlines-server.vercel.app/projects/ongoing/' + projectId)
    }

    const abortProject = async () => {
        navigate('/ongoing')
        await axios.post('https://project-deadlines-server.vercel.app/projects/aborted', { name: project.name, description: project.description, startDate: project.startDate, abortDate: moment(), userEmail: user.result.email })
        await axios.delete('https://project-deadlines-server.vercel.app/projects/ongoing/' + projectId)
    }

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('https://project-deadlines-server.vercel.app/projects/ongoing/' + projectId)
            const tasksData = await axios.get('https://project-deadlines-server.vercel.app/projects/ongoing/tasks/' + projectId)
            setProject(projectInfo.data[0])
            setTasks(tasksData.data.result)
        }
        getProjectInfo()
    })

    return (
        <Box p={{ xs: 1, sm: 10 }}>
            <CardBox >
                <Stack spacing={6}>
                    <Typography variant='h4' flexGrow={1} textAlign='center'>{project.name}</Typography>
                    <hr></hr>
                    <Stack direction='row' justifyContent='space-evenly'>
                        <Typography variant='h6'>Started On: {moment(project.startDate).format("MMM Do YYYY")}</Typography>
                        <Typography variant='h6'>Due By: {moment(project.dueDate).format("MMM Do YYYY")}</Typography>
                    </Stack>
                    <CardBox border={2} sx={{ borderColor: 'primary.main' }}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='h5'>Description:</Typography>
                            <StyledIconButton onClick={() => setIsDescEditModalOpen(true)}>
                                <EditIcon color='primary' />
                            </StyledIconButton>
                        </Stack>
                        <br></br>
                        <Typography variant='body1'>{project.description}</Typography>
                    </CardBox>
                    <DescEditModal open={isDescEditModalOpen} onClose={() => setIsDescEditModalOpen(false)} project={project} />
                    <Stack spacing={5} direction={{ xs: 'column', sm: 'row' }} justifyContent='space-evenly'>
                        <Stack spacing={2} width={{ xs: '100%', sm: '130%' }}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' paddingLeft={5} paddingRight={5} spacing={2}>
                                <Typography variant='h5'>ToDo Tasks:</Typography>
                                <StyledButton onClick={() => setIsTaskModalOpen(true)} variant='contained' color='primary' startIcon={<AddIcon />} sx={{ height: 40, textTransform: 'none' }}>Add Task</StyledButton>
                            </Stack>
                            {
                                !tasks.length ?
                                    <CircularProgress size={40} sx={{ alignSelf: 'center' }} />
                                    : (
                                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} paddingRight={6}>
                                            {
                                                Object.entries(tasks).map(([key, value]) => {
                                                    return (
                                                        <Grid item xs={12} sm={12} md={6} key={key}>
                                                            <Task task={value} />
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    )
                            }
                        </Stack>
                        <StyledInput label="Notes" multiline minRows={10} defaultValue="Default Value" fullWidth/>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                        <StyledButton onClick={finishProject} variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Finish Project</StyledButton>
                        <StyledButton onClick={abortProject} variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Aborte Project</StyledButton>
                        <StyledButton component={Link} to='/ongoing' variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Back</StyledButton>
                    </Stack>
                </Stack>
                <TaskModal open={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} project={project} />
            </CardBox>
        </Box>
    )
}

export default OngoingOpenCard