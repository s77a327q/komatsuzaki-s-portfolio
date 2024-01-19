// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF', 
    },
    secondary: {
      main: '#ff5722', 
    },
  },
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif'
  },
});

export default theme;
