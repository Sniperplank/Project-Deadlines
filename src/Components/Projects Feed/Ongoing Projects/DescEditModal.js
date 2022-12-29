import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Stack, Typography } from '@mui/material'
import { ModalContent } from '../../Styled MUI components/ModalContent'
import { ModalOverlay } from '../../Styled MUI components/ModalOverlay'
import { StyledInput } from '../../Styled MUI components/StyledInput'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function DescEditModal({ open, onClose, project, update }) {
    const { projectId } = useParams()
    const [description, setDescription] = useState(project.description)

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    const updateDesc = async () => {
        await axios.patch('https://project-deadlines-server.vercel.app/projects/ongoing/' + projectId, { ...project, description: description })
        update()
    }

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent sx={{ minWidth: {xs: 0, sm: 400} }}>
                <Typography variant='h5'>Edit Description</Typography>
                <Stack spacing={3} marginTop={2} marginBottom={2}>
                    <StyledInput variant='outlined' name='description' value={description} onChange={handleChange} />
                </Stack>
                <Stack direction='row' spacing={2} marginTop={3} justifyContent='right'>
                    <Button variant='contained' color='primary' onClick={() => {
                        onClose()
                        updateDesc()
                    }}>Save</Button>
                    <Button variant='contained' color='error' onClick={onClose}>Cancel</Button>
                </Stack>
            </ModalContent>
        </>,
        document.getElementById('portal')
    )
}

export default DescEditModal