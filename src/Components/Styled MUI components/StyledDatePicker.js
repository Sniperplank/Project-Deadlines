import { DesktopDatePicker } from "@mui/x-date-pickers";
import { styled } from '@mui/material/styles';

export const StyledDesktopDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        color: theme.palette.text.main,
        '&:hover': {
            color: theme.palette.text.input,
        },
    },
}));