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
          <Typography variant='h6'>Started On: {moment(project.startDate).format("MMM Do YYYY")}</Typography>
          <Typography variant='h6'>Aborted On: {moment(project.abortDate).format("MMM Do YYYY")}</Typography>
        </Stack>
      </Stack>
    </CardBox>
  )
}

export default AbortedCard