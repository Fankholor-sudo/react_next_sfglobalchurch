'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from 'next/link'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutlined'
import SectionTitle from '../SectionTitle'
import { useLatestVideos } from '@/app/(client)/hooks/useLatestVideos'


export default function LatestSermons() {
  const { videos, loading, error} = useLatestVideos()

  if (loading) return <div>Sermons...</div>
  if (error) return <div>Unable to load sermons.</div>
  
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0D13' }}>
      <Container maxWidth="lg">
        <SectionTitle
          overline="The Word"
          title="Latest Sermons"
          subtitle="Powerful messages to ignite your faith and accelerate your destiny."
        />

        <Grid container spacing={3}>
          {videos?.slice(0,3).map((sermon) => (
            <Grid key={sermon.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#181C27',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={sermon.thumbnail}
                    alt={sermon.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(15,17,23,0.4)',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                      '&:hover': { opacity: 1 },
                      cursor: 'pointer',
                    }}
                    component="a"
                    href={sermon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircleOutlineIcon sx={{ fontSize: 56, color: '#C9A84C' }} />
                  </Box>
                  <Chip
                    label={sermon.duration}
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      bgcolor: 'rgba(15,17,23,0.85)',
                      color: '#C9A84C',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      border: '1px solid rgba(201,168,76,0.3)',
                    }}
                  />
                </Box>

                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                    <Chip
                      label={'Dominion Television'}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(201,168,76,0.1)',
                        color: '#C9A84C',
                        fontWeight: 600,
                        fontSize: '0.68rem',
                        border: '1px solid rgba(201,168,76,0.25)',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#FFFFFF',
                      lineHeight: 1.4,
                      mb: 1,
                    }}
                  >
                    {sermon.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    Pastor Joshua Vincent &bull; {sermon.publishedAt}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={sermon?.url}
                    target="_blank"
                    startIcon={<PlayCircleOutlineIcon />}
                    sx={{ fontWeight: 700, fontSize: '0.75rem' }}
                  >
                    Watch Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            component={Link}
            href="/sermons"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ fontWeight: 700 }}
          >
            View All Sermons
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
