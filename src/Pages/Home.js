import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

function Home() {
    const { user } = useAuth()
    const [timeOfDay, setTimeOfDay] = useState('')
    const date = new Date()
    const hours = date.getHours()

    useEffect(() => {
        if (hours < 12) {
            setTimeOfDay('morning')
        } else if (hours >= 12 && hours < 17) {
            setTimeOfDay('afternoon')
        } else {
            setTimeOfDay('evening')
        }
    }, [hours])

    return (
        <Box p={{ xs: 1, sm: 10 }} pl={{ xs: 1, sm: 20 }} pr={{ xs: 1, sm: 20 }}>
            <Typography variant='h4' textAlign='center' color='primary'>Good {timeOfDay}, {user ? user.result.name : 'sign in to get started'}</Typography>
        </Box>
    )
}

export default Home