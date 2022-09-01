import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { StyledIconButton } from '../../Styled MUI components/StyledIconButton';
import '../../../App.css'
import Task from './Task';
import { StyledButton } from '../../Styled MUI components/StyledButton';

function OngoingOpenCard() {
    return (
        <Box flex={4} p={5} sx={{ overflowY: 'scroll' }}>
            <Stack width='100%' spacing={6} sx={{ marginTop: 10, marginBottom: 20 }}>
                <CardBox >
                    <Stack spacing={6}>
                        <Typography variant='h4' flexGrow={1} textAlign='center'>Project Name</Typography>
                        <hr></hr>
                        <Stack direction='row' justifyContent='space-evenly'>
                            <Typography variant='h6'>Started On:</Typography>
                            <Typography variant='h6'>Due By:</Typography>
                        </Stack>
                        <CardBox border={2} sx={{ borderColor: 'primary.main' }}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='h5'>Description:</Typography>
                                <StyledIconButton>
                                    <EditIcon color='primary' />
                                </StyledIconButton>
                            </Stack>
                            <br></br>
                            <Typography variant='body1'>bla bla bla whaf gagw gjsag ougljaw</Typography>
                        </CardBox>
                        <Stack direction='row' justifyContent='space-between' paddingLeft={5} paddingRight={5}>
                            <Typography variant='h5'>ToDo Tasks:</Typography>
                            <StyledButton variant='contained' color='primary' startIcon={<AddIcon />} sx={{ height: 40, textTransform: 'none' }}>Add Task</StyledButton>
                        </Stack>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} paddingRight={6}>
                            <Grid item xs={6}>
                                <Task />
                            </Grid>
                            <Grid item xs={6}>
                                <Task />
                            </Grid>
                            <Grid item xs={6}>
                                <Task />
                            </Grid>
                            <Grid item xs={6}>
                                <Task />
                            </Grid>
                        </Grid>
                        <Stack direction='row' spacing={4}>
                            <StyledButton variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Finish Project</StyledButton>
                            <StyledButton variant='contained' color='primary' sx={{ height: 40 }} fullWidth>Aborte Project</StyledButton>
                        </Stack>
                    </Stack>
                </CardBox>
            </Stack>
        </Box>
    )
}

export default OngoingOpenCard