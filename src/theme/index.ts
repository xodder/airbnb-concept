import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const { typography } = createTheme();

const font = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    xsmall: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    h5: { fontWeight: 800 },
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
        root: ({ theme }) => ({
          textTransform: 'none',
          borderRadius: 3 * theme.shape.borderRadius,
        }),
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
    MuiChip: {
      styleOverrides: {
        filled: {
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid black',
          '&:hover': {
            backgroundColor: 'rgba(18, 18, 18)',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: 'rgb(243, 243, 242)',
          border: 'none',
          borderRadius: 3 * theme.shape.borderRadius,
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 'inherit',
          border: 'none',
          p: theme.spacing(1.8),
          '&.Mui-selected': {
            color: 'white',
            background: 'rgb(17, 17, 17)',
            borderRadius: 'inherit !important',
            '&:hover': {
              background: 'rgb(27, 27, 27)',
            },
          },
        }),
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
      variants: [
        {
          props: { fontSize: 'xsmall' },
          style: { fontSize: '1rem' },
        },
      ],
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
