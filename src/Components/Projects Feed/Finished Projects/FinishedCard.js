import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../../Styled MUI components/CardBox'

function FinishedCard() {
  return (
    <CardBox>
      <Stack direction='row' spacing={4} justifyContent='space-between'>
        <Stack spacing={4}>
          <Typography variant='h5'>Peoject Name</Typography>
          <Typography variant='body1'>loremoasd asgawgag alsfgha ga laghsa gbg,wbkab g,abg pgaholwhsdlbw a ldshaldhw sl ahlksdh wasfhlkagfh lagsdkghaglnsad,bn asflaghasdglasdkslad sladhslafghklgh safhspgqwptgyogdkqgfv safg mals gvq,mgnbka l sflkah wi sald</Typography>
        </Stack>
        <Stack spacing={4}>
          <Typography variant='h6'>Started On: {Date.now()}</Typography>
          <Typography variant='h6'>Finished On:</Typography>
        </Stack>
      </Stack>
    </CardBox>
  )
}

export default FinishedCard