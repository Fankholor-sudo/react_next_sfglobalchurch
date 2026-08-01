'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function GiveStrip() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: '#0A0D13',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: '#C9A84C',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: '#C9A84C',
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <FavoriteBorderIcon sx={{ fontSize: 44, color: '#C9A84C', mb: 2 }} />

        <Typography
          variant="h3"
          sx={{
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: 700,
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            color: '#FFFFFF',
            mb: 2,
          }}
        >
          Partner with Us
        </Typography>

        <Box sx={{ width: 60, height: 3, bgcolor: '#C9A84C', mx: 'auto', mb: 3 }} />

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', mb: 4, lineHeight: 1.9 }}>
          Your generous giving enables us to spread the Gospel, run community programmes, and help those in need. Every seed sown is an investment into God&apos;s kingdom.
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font-cinzel), serif',
            fontStyle: 'italic',
            color: '#C9A84C',
            fontSize: '0.95rem',
            mb: 4,
          }}
        >
          &ldquo;Give, and it will be given to you.&rdquo; &mdash; Luke 6:38
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/give"
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontWeight: 700, px: 5 }}
          >
            Give Online
          </Button>
          <Button
            component={Link}
            href="/give"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ fontWeight: 700, px: 5 }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
