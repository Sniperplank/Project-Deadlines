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
import { Link } from 'react-router-dom'
import '../../../App.css'
import TaskModal from './TaskModal';

function OngoingOpenCard() {
    const { projectId } = useParams()
    const [project, setProject] = useState({})
    const [tasks, setTasks] = useState({})
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)

    useEffect(() => {
        async function getProjectInfo() {
            const projectInfo = await axios.get('http://localhost:5000/projects/ongoing/id?_id=' + projectId)
            const tasksData = await axios.get('http://localhost:5000/projects/ongoing/tasks/projectId?projectId=' + projectId)
            setProject(projectInfo.data[0])
            setTasks(tasksData.data.result)
        }
        getProjectInfo()
    })

    return (
        <Box flex={4} p={5} sx={{ overflowY: 'scroll' }}>
            <Stack width='100%' spacing={6} sx={{ marginTop: 10, marginBottom: 20 }}>
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
                                <StyledIconButton>
                                    <EditIcon color='primary' />
                                </StyledIconButton>
                            </Stack>
                            <br></br>
                            <Typography variant='body1'>{project.description}</Typography>
                        </CardBox>
                        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' paddingLeft={5} paddingRight={5} spacing={2}>
                            <Typography variant='h5'>ToDo Tasks:</Typography>
                            <StyledButton onClick={() => setIsTaskModalOpen(true)} variant='contained' color='primary' startIcon={<AddIcon />} sx={{ height: 40, textTransform: 'none' }}>Add Task</StyledButton>
                        </Stack>
                        <TaskModal open={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} project={project} />
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
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                            <StyledButton variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Finish Project</StyledButton>
                            <StyledButton variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Aborte Project</StyledButton>
                        </Stack>
                        <StyledButton component={Link} to='/ongoing' variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Back</StyledButton>
                    </Stack>
                </CardBox>
            </Stack>
        </Box>
    )
}

export default OngoingOpenCard