import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'
import EditIcon from '@mui/icons-material/Edit';
import { StyledIconButton } from '../../Styled MUI components/StyledIconButton';
import './Styles.css'
import Task from './Task';

function OngoingOpenCard() {
    return (
        <Box flex={4} p={5}>
            <Stack width='100%' spacing={6} sx={{ marginTop: 10 }}>
                <CardBox>
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
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} paddingRight={5}>
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
                    </Stack>
                </CardBox>
            </Stack>
        </Box>
    )
}

export default OngoingOpenCard