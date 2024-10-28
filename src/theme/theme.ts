import { createTheme } from '@mui/material/styles';
import { blue, green, red, orange, purple, grey } from '@mui/material/colors';

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: '#845ec2 '
    },
    secondary: {
      main: '#4b4453'
    },
    error: {
      main: red.A400
    },
    warning: {
      main: orange.A400
    },
    info: {
      main: blue.A400
    },
    success: {
      main: green.A400
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#845ec2',
            color: 'white'
          }
        }
      }
    }
  }
});
