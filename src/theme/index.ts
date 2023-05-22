import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const { shape, typography } = createTheme();

const font = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    h6: { ...typography.body1, fontWeight: 700 },
  },
  palette: {
    primary: {
      main: 'rgb(212, 59, 81)',
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
          borderRadius: 3 * shape.borderRadius,
        },
        colorInherit: {
          backgroundColor: 'white',
        },
        sizeLarge: {
          height: 48,
        },
      },
      defaultProps: {
        disableElevation: true,
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
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
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
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small',
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
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
