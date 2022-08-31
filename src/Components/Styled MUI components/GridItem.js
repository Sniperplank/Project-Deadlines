import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    color: theme.palette.text.main,
}));