import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Body = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.body.main,
    color: theme.palette.text.main,
    position: 'absolute',
    height: '100vh',
    overflow: 'hidden',
}));