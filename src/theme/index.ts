import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const { breakpoints } = createTheme();

const font = Inter({
  weight: ['400', '500', '600', '700', '900', '800'],
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
  palette: {
    primary: {
      main: 'rgb(255, 56, 92)',
      dark: 'rgb(212, 59, 81)',
    },
    background: {
      paper: 'rgb(243, 243, 242)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          background: 'rgb(243, 243, 242)',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 'inherit',
          border: 'none',
          '&.Mui-selected': {
            color: 'white',
            background: 'rgb(17, 17, 17)',
            borderRadius: 'inherit !important',
            '&:hover': {
              background: 'rgb(27, 27, 27)',
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          margin: 0,
        },
        html: {
          fontSize: 16,
          [breakpoints.up('xl')]: {
            fontSize: 18,
          },
          [breakpoints.down('md')]: {
            fontSize: 16,
          },
          [breakpoints.down('sm')]: {
            fontSize: 14,
          },
        },
        '#__next': {
          position: 'relative',
        },
        'html, body, #__next': {
          overflow: 'hidden',
          height: '100%',
        },
        '*, ::before, ::after': {
          boxSizing: 'border-box',
        },
        p: {
          margin: 0,
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
