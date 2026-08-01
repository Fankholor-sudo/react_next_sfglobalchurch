'use client'

'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'

export default function WelcomeSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Image side */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  right: -16,
                  width: '70%',
                  height: '70%',
                  border: '3px solid #C9A84C',
                  borderRadius: 2,
                  zIndex: 0,
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1, borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/images/about-bg.png"
                  alt="Spirit Fountain Global Church community"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Text side */}
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionTitle
              overline="Welcome Home"
              title="A Place to Belong, Grow & Thrive"
              align="left"
            />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
              Spirit Fountain Global Church is a vibrant, Spirit-filled church committed to raising champions for God. We believe every person is created with divine purpose — to dominate their sphere and take over their world for Christ.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.9 }}>
              Whether you are new to faith or have walked with God for years, you will find a home among us. Join us as we worship, grow, and impact our community together.
            </Typography>

            {/* Scripture */}
            <Box
              sx={{
                borderLeft: '4px solid #C9A84C',
                pl: 3,
                py: 1,
                mb: 4,
                bgcolor: 'rgba(201,168,76,0.05)',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontStyle: 'italic',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                &ldquo;I can do all things through Christ who strengthens me.&rdquo;
              </Typography>
              <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.8rem', mt: 1 }}>
                Philippians 4:13
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/about"
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontWeight: 700 }}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
