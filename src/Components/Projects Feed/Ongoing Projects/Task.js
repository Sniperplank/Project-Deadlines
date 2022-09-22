import { Stack, Typography } from '@mui/material'
import React from 'react'
import { GridItem } from '../../Styled MUI components/GridItem'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledIconButton } from '../../Styled MUI components/StyledIconButton';
import axios from 'axios';

function Task({ task }) {
    const finishTask = async () => {
        await axios.delete('https://project-deadlines.herokuapp.com/projects/ongoing/tasks/deleteTask?_id=' + task._id)
    }

    const deleteTask = async () => {
        await axios.delete('https://project-deadlines.herokuapp.com/projects/ongoing/tasks/deleteTask?_id=' + task._id)
    }

    return (
        <GridItem>
            <Typography variant='body1'>{task.description}</Typography>
            <Stack direction='row' spacing={2} justifyContent='right'>
                <StyledIconButton onClick={finishTask}>
                    <CheckIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton onClick={deleteTask}>
                    <DeleteIcon color='primary' />
                </StyledIconButton>
            </Stack>
        </GridItem>
    )
}

export default Task