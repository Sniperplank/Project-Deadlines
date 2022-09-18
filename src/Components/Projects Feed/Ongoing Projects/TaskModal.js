import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Stack, Typography } from '@mui/material'
import { ModalContent } from '../../Styled MUI components/ModalContent'
import { ModalOverlay } from '../../Styled MUI components/ModalOverlay'
import { StyledInput } from '../../Styled MUI components/StyledInput'
import axios from 'axios'

function TaskModal({ open, onClose, project }) {
    const [taskData, setTaskData] = useState({ description: '', projectId: project._id })

    const handleChange = (e) => {
        setTaskData({ description: e.target.value, projectId: project._id })
    }

    const addTask = async () => {
        await axios.post('http://localhost:5000/projects/ongoing/tasks', taskData)
    }

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent sx={{ minWidth: {xs: 0, sm: 400} }}>
                <Typography variant='h4'>New Task</Typography>
                <Stack spacing={3} marginTop={2} marginBottom={2}>
                    <StyledInput variant='outlined' name='description' label='Description' onChange={handleChange} />
                </Stack>
                <Stack direction='row' spacing={2} marginTop={3} justifyContent='right'>
                    <Button variant='contained' color='primary' onClick={() => {
                        onClose()
                        addTask()
                    }}>Add</Button>
                    <Button variant='contained' color='error' onClick={onClose}>Cancel</Button>
                </Stack>
            </ModalContent>
        </>,
        document.getElementById('portal')
    )
}

export default TaskModal