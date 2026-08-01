'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage?: string
}

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 220, md: 300 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: '#0A0D13',
      }}
    >
      {/* Background */}
      {bgImage && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
          }}
        />
      )}

      {/* Gold accent line */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: '#C9A84C',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 6, md: 8 } }}>
        <Typography
          variant="overline"
          sx={{
            color: '#C9A84C',
            fontFamily: 'var(--font-open-sans), sans-serif',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            display: 'block',
            mb: 1,
          }}
        >
          Spirit Fountain Global Church
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#FFFFFF',
            mb: subtitle ? 2 : 0,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  )
}
