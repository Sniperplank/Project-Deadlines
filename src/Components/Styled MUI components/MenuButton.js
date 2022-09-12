import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MenuButton = styled(Button)(({ theme }) => ({
    borderRadius: 5,
    height: 40,
    color: theme.palette.buttonText.main,
    fontWeight: 'bold',
}));