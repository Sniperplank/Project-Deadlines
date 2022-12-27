import { Stack, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'

function AbortedCard({ project }) {
  return (
    <CardBox>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent='space-between'>
        <Stack spacing={4}>
          <Typography variant='h5'>{project.name}</Typography>
          <Typography variant='body1'>{project.description}</Typography>
        </Stack>
        <Stack spacing={4}>
          <Stack direction='row' spacing={1}>
            <Typography variant='h6'>Started On: </Typography>
            <Typography variant='h6' color='primary'>{moment(project.startDate).format("MMM Do YYYY")}</Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <Typography variant='h6'>Due By: </Typography>
            <Typography variant='h6' color='primary'>{moment(project.dueDate).format("MMM Do YYYY")}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </CardBox>
  )
}

export default AbortedCard