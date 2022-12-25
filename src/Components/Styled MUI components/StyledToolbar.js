import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.main,
    padding: 10
}));