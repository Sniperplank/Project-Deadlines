import { Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'
import { Link } from 'react-router-dom'
import axios from 'axios'

function OngoingCard() {

  useEffect(() => {
    async function getProjectInfo() {
      const projectInfo = await axios.get('http://localhost:5000/projects/ongoing')
      console.log(projectInfo)
    }
    getProjectInfo()
  })

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