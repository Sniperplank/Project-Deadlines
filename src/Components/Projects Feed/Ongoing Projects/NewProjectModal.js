import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useAuth } from '../../../contexts/AuthContext'
//import { Dayjs } from 'dayjs';
import { Button, Stack, Typography } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { ModalContent } from '../../Styled MUI components/ModalContent'
import { ModalOverlay } from '../../Styled MUI components/ModalOverlay'
import { StyledInput } from '../../Styled MUI components/StyledInput'
import { StyledDesktopDatePicker } from '../../Styled MUI components/StyledDatePicker'
import axios from 'axios'

function NewProjectModal({ open, onClose }) {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const { user } = useAuth()
    const [projectData, setProjectData] = useState({ name: '', description: '', startDate: '', dueDate: '', userEmail: user.result.email })

    const addProject = async () => {
        await axios.post('http://localhost:5000/projects/ongoing', projectData)
    }

    const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        console.log(startDate)
    }, [startDate])

    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent>
                <Typography variant='h4'>New Project</Typography>
                <Stack spacing={3} marginTop={2} marginBottom={2}>
                    <StyledInput variant='outlined' name='name' label='Name' onChange={handleChange} />
                    <StyledInput variant='outlined' name='description' label='Description' onChange={handleChange} />
                    <Stack>
                        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <StyledDesktopDatePicker label='Start Date' name='startDate' value={startDate} onChange={(newValue) => { setStartDate(newValue.format('YYYY/MM/DD')) }} renderInput={(params) => <StyledInput {...params} />} />
                            <StyledDesktopDatePicker label='End Date' name='dueDate' value={endDate} onChange={(newValue) => { setEndDate(newValue.format('YYYY/MM/DD')) }} renderInput={(params) => <StyledInput {...params} />} />
                        </Stack>
                        <Stack direction="row" spacing={3} sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <MobileDatePicker label='Start Date' name='startDate' value={startDate} onChange={(newValue) => { setStartDate(newValue.format('YYYY/MM/DD')) }} renderInput={(params) => <StyledInput {...params} />} />
                            <MobileDatePicker label='End Date' name='dueDate' value={endDate} onChange={(newValue) => { setEndDate(newValue.format('YYYY/MM/DD')) }} renderInput={(params) => <StyledInput {...params} />} />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={2} marginTop={3} justifyContent='right'>
                    <Button variant='contained' color='primary' onClick={() => {
                        onClose()
                        addProject()
                    }}>Add</Button>
                    <Button variant='contained' color='error' onClick={onClose}>Cancel</Button>
                </Stack>
            </ModalContent>
        </>,
        document.getElementById('portal')
    )
}

export default NewProjectModal