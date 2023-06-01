import { Quicksand } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const quicksand = Quicksand({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#FFB2B8',
    },
    secondary: {
      main: '#FFB59A',
    },
  },
  typography: {
    fontFamily: quicksand.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
