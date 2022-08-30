import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 15,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
}));