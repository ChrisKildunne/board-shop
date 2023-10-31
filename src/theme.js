import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFF', // White
        },
        secondary: {
            main: '#000', // Black
          },
      // Customize additional colors
      error: {
        main: '#FF0000',
      },
      background: {
        default: '#F5F5F5', // Customize the default background color
      },
    },
    typography: {
      // Customize typography styles
      fontFamily: 'Arial, sans-serif',
      h1: {
        fontSize: '2.5rem', // Adjust the heading 1 font size
        fontWeight: 700, // Adjust the font weight
      },
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  
  export default theme;
  