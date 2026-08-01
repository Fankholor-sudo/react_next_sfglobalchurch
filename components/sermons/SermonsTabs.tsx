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

const allSermons = [
  { id: 1, title: 'Walking in Your Divine Dominion', speaker: 'Senior Pastor', date: 'July 20, 2025', category: 'Dominion', series: 'Dominion Series', duration: '54 min' },
  { id: 2, title: 'The Spirit of a Champion', speaker: 'Senior Pastor', date: 'July 13, 2025', category: 'Identity', series: 'Who You Are', duration: '48 min' },
  { id: 3, title: 'Positioned for Purpose', speaker: 'Guest Minister', date: 'July 6, 2025', category: 'Purpose', series: 'Kingdom Living', duration: '61 min' },
  { id: 4, title: 'Faith That Moves Mountains', speaker: 'Senior Pastor', date: 'June 29, 2025', category: 'Faith', series: 'Faith Series', duration: '52 min' },
  { id: 5, title: 'The Power of Prayer', speaker: 'Co-Pastor', date: 'June 22, 2025', category: 'Prayer', series: 'Prayer School', duration: '45 min' },
  { id: 6, title: 'Abundance & Overflow', speaker: 'Senior Pastor', date: 'June 15, 2025', category: 'Provision', series: 'Kingdom Finances', duration: '57 min' },
  { id: 7, title: 'Healing is Your Heritage', speaker: 'Guest Minister', date: 'June 8, 2025', category: 'Healing', series: 'Miracles', duration: '63 min' },
  { id: 8, title: 'The Fear of the Lord', speaker: 'Senior Pastor', date: 'June 1, 2025', category: 'Wisdom', series: 'Wisdom Series', duration: '50 min' },
  { id: 9, title: 'Raising Godly Children', speaker: 'Co-Pastor', date: 'May 25, 2025', category: 'Family', series: 'Family Matters', duration: '44 min' },
]

const categories = ['All', 'Dominion', 'Identity', 'Purpose', 'Faith', 'Prayer', 'Provision', 'Healing', 'Family']

export default function SermonsTabs() {
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filtered = activeCategory === 'All'
    ? allSermons
    : allSermons.filter((s) => s.category === activeCategory)

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
      <Container maxWidth="lg">
        {/* Featured / Latest */}
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
              image="/images/sermon-thumb.png"
              alt="Walking in Your Divine Dominion"
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
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 72, color: '#C9A84C' }} />
            </Box>
          </Box>
          <CardContent sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Chip
              label="Dominion Series"
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
              Walking in Your Divine Dominion
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <MicIcon sx={{ fontSize: 16, color: '#C9A84C' }} />
              <Typography variant="body2" color="text.secondary">
                Senior Pastor &bull; July 20, 2025 &bull; 54 min
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              Discover the eternal truth that you were not created to merely survive, but to dominate. This message will unlock the understanding of your divine mandate and how to walk in it daily.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" startIcon={<PlayCircleOutlineIcon />} sx={{ fontWeight: 700 }}>
                Watch Now
              </Button>
              <Button variant="outlined" color="primary" sx={{ fontWeight: 700 }}>
                Listen Audio
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Filter tabs */}
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
                    image="/images/sermon-thumb.png"
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
                  >
                    <PlayCircleOutlineIcon sx={{ fontSize: 52, color: '#C9A84C' }} />
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
                      label={sermon.category}
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
                    {sermon.speaker} &bull; {sermon.date}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button variant="outlined" color="primary" size="small" startIcon={<PlayCircleOutlineIcon />} sx={{ fontWeight: 700, fontSize: '0.72rem' }}>
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
