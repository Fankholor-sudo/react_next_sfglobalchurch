'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'
import MuiRegistry from './mui-registry'

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MuiRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiRegistry>
  )
}
