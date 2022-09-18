import { Stack, Typography } from '@mui/material'
import React from 'react'
import { GridItem } from '../../Styled MUI components/GridItem'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledIconButton } from '../../Styled MUI components/StyledIconButton';

function Task({ task }) {
    return (
        <GridItem>
            <Typography variant='h6'>{task.description}</Typography>
            <Stack direction='row' spacing={2} justifyContent='right'>
                <StyledIconButton>
                    <CheckIcon color='primary' />
                </StyledIconButton>
                <StyledIconButton>
                    <DeleteIcon color='primary' />
                </StyledIconButton>
            </Stack>
        </GridItem>
    )
}

export default Task