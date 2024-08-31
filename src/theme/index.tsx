import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  // palette: {
  //   // primary: {
  //   //   light: '#a27cf7',
  //   //   main: '#8b5cf6',
  //   //   dark: '#6140ac',
  //   //   contrastText: '#fff',
  //   // },
  //   secondary: {
  //     light: '#90a4ae',
  //     main: '#607d8b',
  //     dark: '#455a64',
  //     contrastText: '#000',
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
