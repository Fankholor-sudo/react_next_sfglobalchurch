'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SectionTitle from '../SectionTitle'

const events = [
  {
    id: 1,
    title: 'Kingdom Dominion Conference',
    date: 'August 2–4, 2025',
    day: '02',
    month: 'AUG',
    time: '9:00 AM – 9:00 PM',
    location: 'SFGC Auditorium',
    category: 'Conference',
    description: 'A three-day power-packed conference to equip you with tools for kingdom impact and dominion in every sphere of life.',
  },
  {
    id: 2,
    title: 'Young Adults Night of Worship',
    date: 'August 16, 2025',
    day: '16',
    month: 'AUG',
    time: '7:00 PM – 11:00 PM',
    location: 'SFGC Auditorium',
    category: 'Youth',
    description: 'An unforgettable night of praise, worship, and the Word for young adults aged 18–35.',
  },
  {
    id: 3,
    title: 'Healing & Miracles Service',
    date: 'September 7, 2025',
    day: '07',
    month: 'SEP',
    time: '10:00 AM – 2:00 PM',
    location: 'SFGC Auditorium',
    category: 'Special Service',
    description: 'Come expecting a supernatural encounter. Miracles, signs, and wonders as we gather in His name.',
  },
]

export default function UpcomingEvents() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
      <Container maxWidth="lg">
        <SectionTitle
          overline="What's On"
          title="Upcoming Events"
          subtitle="Be part of life-changing gatherings that will stir your spirit and sharpen your faith."
        />

        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid key={event.id} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#181C27',
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  {/* Date badge + category */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5 }}>
                    <Box
                      sx={{
                        bgcolor: '#C9A84C',
                        color: '#0F1117',
                        borderRadius: 1,
                        px: 1.5,
                        py: 0.75,
                        textAlign: 'center',
                        minWidth: 52,
                      }}
                    >
                      <Typography sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 900, fontSize: '1.5rem', lineHeight: 1 }}>
                        {event.day}
                      </Typography>
                      <Typography sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                        {event.month}
                      </Typography>
                    </Box>
                    <Chip
                      label={event.category}
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
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#FFFFFF',
                      lineHeight: 1.4,
                      mb: 1.5,
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                    {event.description}
                  </Typography>

                  <Divider sx={{ mb: 2 }} />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeIcon sx={{ fontSize: 15, color: '#C9A84C' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                        {event.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnIcon sx={{ fontSize: 15, color: '#C9A84C' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                        {event.location}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            component={Link}
            href="/events"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ fontWeight: 700 }}
          >
            See All Events
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
