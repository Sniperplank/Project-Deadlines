import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'
import { Link } from 'react-router-dom'

function OngoingCard() {
  return (
    <CardBox component={Link} to='/ongoing/:projectName'>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent='space-between'>
        <Stack spacing={4}>
          <Typography variant='h5'>Peoject Name</Typography>
          <Typography variant='body1'></Typography>
        </Stack>
        <Stack spacing={4}>
          <Typography variant='h6'>Started On: {Date.now()}</Typography>
          <Typography variant='h6'>Due By:</Typography>
        </Stack>
      </Stack>
    </CardBox>
  )
}

export default OngoingCard