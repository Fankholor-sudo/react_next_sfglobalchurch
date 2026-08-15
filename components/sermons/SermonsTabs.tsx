'use client'

import * as React from 'react'
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
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutlined'
import MicIcon from '@mui/icons-material/Mic'
import SectionTitle from '../SectionTitle'
import { YouTubeVideo } from '@/app/lib/youtube'

interface SermonsTabProps {
  videos: YouTubeVideo[],
  loading: boolean,
  error: string | null,
}

const categories = ['All', 'Sunday', 'Friday']

export default function SermonsTabs({videos, loading, error}: SermonsTabProps) {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const filtered: YouTubeVideo[] = activeCategory === 'All'? videos: 
    videos.filter((s) => s.title.toLowerCase().includes(activeCategory.toLowerCase()))
  const latestSermon: YouTubeVideo = videos[0] || null

  if (loading) return <div>Loading sermons...</div>
  if (error) return <div>Unable to load sermons.</div>

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
      <Container maxWidth="lg">
        <SectionTitle overline="Latest Message" title="This Week's Sermon" />
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            bgcolor: '#181C27',
            mb: 8,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ position: 'relative', width: { xs: '100%', md: 480 }, minHeight: { xs: 260, md: 300 }, flexShrink: 0 }}>
            <CardMedia
              component="img"
              image={latestSermon?.thumbnail}
              alt={latestSermon?.title || 'Latest Sermon'}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(15,17,23,0.35)',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                '&:hover': { bgcolor: 'rgba(15,17,23,0.55)' },
              }}
              component="a"
              href={latestSermon?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 72, color: '#C9A84C' }}/>
            </Box>
          </Box>
          <CardContent sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Chip
              label="Dominion Television"
              size="small"
              sx={{ mb: 2, alignSelf: 'flex-start', bgcolor: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', fontWeight: 600 }}
            />
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2,
                fontSize: { xs: '1.4rem', md: '2rem' },
                lineHeight: 1.3,
              }}
            >
              {latestSermon?.title || 'Walking in Your Divine Dominion'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <MicIcon sx={{ fontSize: 16, color: '#C9A84C' }} />
              <Typography variant="body2" color="text.secondary">
                Pastor Joshua Vincent &bull; {latestSermon.publishedAt} &bull; {latestSermon.duration}
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              True faith is born from the knowledge of God. Leave your "Egypt" behind, 
              stand on what God has spoken, and believe both the Lord your God and His prophets.
              When faith is rooted in revelation, it will always produce results.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                href={latestSermon?.url}
                target="_blank"
                startIcon={<PlayCircleOutlineIcon />}
                sx={{ fontWeight: 700 }}
              >
                Watch Now
              </Button>
            </Box>
          </CardContent>
        </Card>

        <SectionTitle overline="Archive" title="All Messages" />

        <Box sx={{ mb: 4, borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
          <Tabs
            value={activeCategory}
            onChange={(_, v) => setActiveCategory(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                color: '#B0B8CC',
                fontFamily: 'var(--font-open-sans), sans-serif',
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                minWidth: 'auto',
                '&.Mui-selected': { color: '#C9A84C' },
              },
              '& .MuiTabs-indicator': { backgroundColor: '#C9A84C' },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filtered.map((sermon) => (
            <Grid key={sermon.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#181C27' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="180"
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
                      bgcolor: 'rgba(15,17,23,0.3)',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                      cursor: 'pointer',
                      '&:hover': { opacity: 1 },
                    }}
                    component="a"
                    href={sermon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircleOutlineIcon sx={{ fontSize: 52, color: '#C9A84C' }}/>
                  </Box>
                  <Chip
                    label={sermon.duration}
                    size="small"
                    sx={{ position: 'absolute', bottom: 8, right: 8, bgcolor: 'rgba(15,17,23,0.85)', color: '#C9A84C', fontWeight: 700, fontSize: '0.7rem', border: '1px solid rgba(201,168,76,0.3)' }}
                  />
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                    <Chip
                      label={'Dominion Television'}
                      size="small"
                      sx={{ bgcolor: 'rgba(201,168,76,0.1)', color: '#C9A84C', fontWeight: 600, fontSize: '0.68rem', border: '1px solid rgba(201,168,76,0.25)' }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 600, fontSize: '0.95rem', color: '#FFFFFF', lineHeight: 1.4, mb: 1 }}
                  >
                    {sermon.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.78rem' }}>
                    {/* speaker */}
                    {'Pastor Joshua Vincent'} &bull; {sermon.publishedAt}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={sermon.url}
                    target="_blank"
                    size="small"
                    startIcon={<PlayCircleOutlineIcon />}
                    sx={{ fontWeight: 700, fontSize: '0.72rem' }}
                  >
                    Watch
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
