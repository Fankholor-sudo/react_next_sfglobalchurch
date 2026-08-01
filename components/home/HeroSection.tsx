'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '100svh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: '#0F1117',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      {/* Overlay gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(15,17,23,0.95) 40%, rgba(15,17,23,0.6) 100%), linear-gradient(to top, rgba(15,17,23,0.8) 0%, transparent 60%)',
        }}
      />

      {/* Gold bottom border */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, bgcolor: '#C9A84C' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 10, md: 4 } }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Welcome to Spirit Fountain Global Church
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
                lineHeight: 1.1,
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              Created to{' '}
              <Box component="span" sx={{ color: '#C9A84C' }}>
                Dominate
              </Box>
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
                lineHeight: 1.1,
                color: '#FFFFFF',
                mb: 4,
              }}
            >
              Formed to{' '}
              <Box component="span" sx={{ color: '#C9A84C' }}>
                Take Over
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#B0B8CC',
                maxWidth: 520,
                mb: 4,
                lineHeight: 1.9,
                fontSize: '1.05rem',
              }}
            >
              Join a Spirit-filled community of believers who are transforming their world through faith, prayer, and the Word of God. Your destiny starts here.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                component={Link}
                href="/connect"
                variant="contained"
                color="primary"
                size="large"
                sx={{ fontWeight: 700, fontSize: '0.85rem', px: 4, py: 1.5 }}
              >
                Plan Your Visit
              </Button>
              <Button
                component={Link}
                href="/sermons"
                variant="outlined"
                color="primary"
                size="large"
                sx={{ fontWeight: 700, fontSize: '0.85rem', px: 4, py: 1.5 }}
              >
                Watch Sermons
              </Button>
            </Box>

            {/* Service times strip */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, md: 4 },
                mt: 6,
                pt: 3,
                borderTop: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {[
                { label: 'Sunday Service', time: '9:00 AM & 11:00 AM' },
                { label: 'Wednesday', time: 'Bible Study 6:30 PM' },
                { label: 'Friday', time: 'Prayer Night 7:00 PM' },
              ].map((s) => (
                <Box key={s.label}>
                  <Typography
                    sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                  >
                    {s.label}
                  </Typography>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem' }}>
                    {s.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Logo Emblem */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: 380,
                height: 380,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
                },
              }}
            >
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
