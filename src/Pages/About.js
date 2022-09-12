import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { CardBox } from '../Components/Styled MUI components/CardBox'

function About() {
    return (
        <Box flex={4} p={5}>
            <Stack width='100%' spacing={6} sx={{ marginTop: 10 }}>
                <CardBox minHeight={400}>
                    <Typography variant='h3'>About</Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Typography variant='h6'>This is an app to put a deadline for a project that you need to finish but can't seem to be able to just finish it. That was exactly why I made this app. I have so many projects that I want to work on, but I can never just finish one and be completly done with it. So, my hope is that this app will help you and me get those projects done before a set deadline.</Typography>
                </CardBox>
            </Stack>
        </Box>
    )
}

export default About