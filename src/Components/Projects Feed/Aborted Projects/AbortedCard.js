import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'

function AbortedCard() {
  return (
    <CardBox>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent='space-between'>
        <Stack spacing={4}>
          <Typography variant='h5'>Peoject Name</Typography>
          <Typography variant='body1'>Desc</Typography>
        </Stack>
        <Stack spacing={4}>
          <Typography variant='h6'>Started On: {Date.now()}</Typography>
          <Typography variant='h6'>Aborted On:</Typography>
        </Stack>
      </Stack>
    </CardBox>
  )
}

export default AbortedCard