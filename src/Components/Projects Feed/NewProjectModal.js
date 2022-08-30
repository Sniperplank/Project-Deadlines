import React, { useState } from 'react'
import ReactDOM from 'react-dom'
//import { Dayjs } from 'dayjs';
import { Button, Stack, Typography } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers'
import { ModalContent } from '../Styled MUI components/ModalContent'
import { ModalOverlay } from '../Styled MUI components/ModalOverlay'
import { StyledInput } from '../Styled MUI components/StyledInput'
import { StyledDesktopDatePicker } from '../Styled MUI components/StyledDatePicker'

function NewProjectModal({ open, onClose }) {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent>
                <Typography variant='h4'>New Project</Typography>
                <Stack spacing={3} marginTop={2} marginBottom={2}>
                    <StyledInput variant='outlined' label='Name' />
                    <StyledInput variant='outlined' label='Description' />
                    <Stack>
                        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <StyledDesktopDatePicker label='Start Date' value={startDate} onChange={(newValue) => { setStartDate(newValue) }} renderInput={(params) => <StyledInput {...params} />} />
                            <StyledDesktopDatePicker label='End Date' value={endDate} onChange={(newValue) => { setEndDate(newValue) }} renderInput={(params) => <StyledInput {...params} />} />
                        </Stack>
                        <Stack direction="row" spacing={3} sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <MobileDatePicker label='Start Date' value={startDate} onChange={(newValue) => { setStartDate(newValue) }} renderInput={(params) => <StyledInput {...params} />} />
                            <MobileDatePicker label='End Date' value={endDate} onChange={(newValue) => { setEndDate(newValue) }} renderInput={(params) => <StyledInput {...params} />} />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={2} marginTop={3} justifyContent='right'>
                    <Button variant='contained' color='primary' onClick={onClose}>Add</Button>
                    <Button variant='contained' color='error' onClick={onClose}>Cancel</Button>
                </Stack>
            </ModalContent>
        </>,
        document.getElementById('portal')
    )
}

export default NewProjectModal