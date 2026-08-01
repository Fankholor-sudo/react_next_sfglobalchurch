'use client'

import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C9A84C',
      light: '#E0C470',
      dark: '#9E7A28',
      contrastText: '#0F1117',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#0F1117',
    },
    background: {
      default: '#0F1117',
      paper: '#181C27',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B8CC',
    },
    divider: 'rgba(201,168,76,0.2)',
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Cinzel", "Times New Roman", serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serif',
      lineHeight: 1.75,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '10px 28px',
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#C9A84C',
            color: '#0F1117',
            '&:hover': {
              backgroundColor: '#E0C470',
            },
          },
          '&.MuiButton-outlinedPrimary': {
            borderColor: '#C9A84C',
            color: '#C9A84C',
            '&:hover': {
              borderColor: '#E0C470',
              backgroundColor: 'rgba(201,168,76,0.08)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#181C27',
          border: '1px solid rgba(201,168,76,0.15)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(201,168,76,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15,17,23,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(201,168,76,0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(201,168,76,0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#C9A84C',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#C9A84C',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#C9A84C',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
})
