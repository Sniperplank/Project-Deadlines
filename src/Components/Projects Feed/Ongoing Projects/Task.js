import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { GridItem } from '../../Styled MUI components/GridItem'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledIconButton } from '../../Styled MUI components/StyledIconButton';
import axios from 'axios';
import TaskEditModal from './TaskEditModal';


function Task({ task, update }) {
    const [isTaskEditModalOpen, setIsTaskEditModalOpen] = useState(false)

    const finishTask = async () => {
        await axios.delete('https://project-deadlines-server.vercel.app/projects/ongoing/tasks/deleteTask?_id=' + task._id)
        update()
    }

    const deleteTask = async () => {
        await axios.delete('https://project-deadlines-server.vercel.app/projects/ongoing/tasks/deleteTask?_id=' + task._id)
        update()
    }

    return (
        <GridItem>
            <Typography variant='body1'>{task.description}</Typography>
            <Stack direction='row' justifyContent='right'>
                <StyledIconButton onClick={finishTask}>
                    <CheckIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton onClick={() => setIsTaskEditModalOpen(true)}>
                    <EditIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton onClick={deleteTask}>
                    <DeleteIcon color='primary' />
                </StyledIconButton>
            </Stack>
            <TaskEditModal open={isTaskEditModalOpen} onClose={() => setIsTaskEditModalOpen(false)} task={task} update={update}/>
        </GridItem>
    )
}

export default Task