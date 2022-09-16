import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'
import { Link } from 'react-router-dom'
import moment from 'moment'

function OngoingCard({ project }) {
  return (
    <CardBox component={Link} to={project._id}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent='space-between'>
        <Stack spacing={4}>
          <Typography variant='h5'>{project.name}</Typography>
          <Typography variant='body1'>{project.description}</Typography>
        </Stack>
        <Stack spacing={4}>
          <Typography variant='h6'>Started On: {moment(project.startDate).format("MMM Do YYYY")}</Typography>
          <Typography variant='h6'>Due By: {moment(project.dueDate).format("MMM Do YYYY")}</Typography>
        </Stack>
      </Stack>
    </CardBox>
  )
}

export default OngoingCard