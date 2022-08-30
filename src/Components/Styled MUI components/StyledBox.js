import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
    borderRadius: 15,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 3,
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
}));