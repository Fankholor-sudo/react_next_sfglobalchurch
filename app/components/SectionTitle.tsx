'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface SectionTitleProps {
  overline?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <Box sx={{ textAlign: align, mb: 6 }}>
      {overline && (
        <Typography
          variant="overline"
          sx={{
            color: '#C9A84C',
            fontFamily: 'var(--font-open-sans), sans-serif',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            display: 'block',
            mb: 1,
          }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'var(--font-cinzel), serif',
          fontWeight: 700,
          fontSize: { xs: '1.8rem', md: '2.4rem' },
          color: light ? '#0F1117' : '#FFFFFF',
          mb: 1.5,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 3,
          bgcolor: '#C9A84C',
          mx: align === 'center' ? 'auto' : 0,
          mb: subtitle ? 2.5 : 0,
        }}
      />
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: align === 'center' ? 600 : '100%',
            mx: align === 'center' ? 'auto' : 0,
            lineHeight: 1.8,
            mt: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
