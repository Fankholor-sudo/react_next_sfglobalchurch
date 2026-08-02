'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const featuredEvent = {
  title: 'Kingdom Dominion Conference 2025',
  dates: 'August 2–4, 2025',
  time: '9:00 AM – 9:00 PM Daily',
  location: 'SFGC Auditorium, 1025 Park Street, Hatfield, Pretoria, Gauteng, 0083',
  category: 'Annual Conference',
  description:
    'Join us for our flagship annual conference three days of intense worship, powerful preaching, and divine encounters. Speakers from across Africa and beyond will minister as we together press into our Kingdom mandate. This is the event of the year. Do not miss it.',
  speakers: ['Senior Pastor John Doe', 'Guest Minister A', 'Guest Minister B'],
}

const upcomingEvents = [
  {
    id: 1, title: 'Young Adults Night of Worship', day: '16', month: 'AUG',
    date: 'August 16, 2025', time: '7:00 PM – 11:00 PM', location: 'SFGC Auditorium',
    category: 'Youth', description: 'An unforgettable night of praise and worship for young adults aged 18–35.',
  },
  {
    id: 2, title: 'Healing & Miracles Service', day: '07', month: 'SEP',
    date: 'September 7, 2025', time: '10:00 AM – 2:00 PM', location: 'SFGC Auditorium',
    category: 'Special Service', description: 'Come expecting a supernatural encounter. Miracles, signs, and wonders.',
  },
  {
    id: 3, title: 'Women\'s Empowerment Breakfast', day: '20', month: 'SEP',
    date: 'September 20, 2025', time: '8:00 AM – 12:00 PM', location: 'SFGC Auditorium',
    category: 'Women\'s Ministry', description: 'Equipping women to lead with wisdom, faith, and excellence in every sphere.',
  },
  {
    id: 4, title: 'Men\'s Breakfast & Leadership Forum', day: '04', month: 'OCT',
    date: 'October 4, 2025', time: '7:00 AM – 10:00 AM', location: 'SFGC Auditorium',
    category: 'Men\'s Ministry', description: 'Strengthening men to be godly leaders in their homes, workplaces, and communities.',
  },
  {
    id: 5, title: 'Night of Praise & Thanksgiving', day: '26', month: 'OCT',
    date: 'October 26, 2025', time: '6:30 PM – 10:00 PM', location: 'SFGC Auditorium',
    category: 'Worship Night', description: 'An evening dedicated entirely to praise and thanksgiving as we reflect on God\'s goodness.',
  },
  {
    id: 6, title: 'End of Year Celebration Service', day: '28', month: 'DEC',
    date: 'December 28, 2025', time: '10:00 AM – 2:00 PM', location: 'SFGC Auditorium',
    category: 'Celebration', description: 'Close out the year with gratitude, testimonies, and expectation for what God will do next.',
  },
]

export default function EventsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Events"
        subtitle="Life-changing gatherings to build your faith, strengthen community, and encounter God's presence."
        bgImage="/images/events-bg.png"
      />

      {/* Featured Event */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
        <Container maxWidth="lg">
          <SectionTitle overline="Featured Event" title="Don't Miss This" />
          <Card
            sx={{
              bgcolor: '#181C27',
              border: '2px solid rgba(201,168,76,0.35)',
              overflow: 'hidden',
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ position: 'relative', height: { xs: 260, md: '100%' }, minHeight: { md: 400 } }}>
                  <CardMedia
                    component="img"
                    image="/images/events-bg.png"
                    alt={featuredEvent.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: '#C9A84C',
                      color: '#0F1117',
                      borderRadius: 1,
                      px: 1.5,
                      py: 0.75,
                    }}
                  >
                    <Typography sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                      {featuredEvent.category}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      mb: 3,
                      fontSize: { xs: '1.4rem', md: '1.9rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {featuredEvent.title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    {[
                      { icon: <CalendarMonthIcon sx={{ fontSize: 16 }} />, text: featuredEvent.dates },
                      { icon: <AccessTimeIcon sx={{ fontSize: 16 }} />, text: featuredEvent.time },
                      { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, text: featuredEvent.location },
                    ].map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ color: '#C9A84C', mt: 0.15, flexShrink: 0 }}>{item.icon}</Box>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{item.text}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
                    {featuredEvent.description}
                  </Typography>

                  <Divider sx={{ mb: 2.5 }} />

                  <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.5 }}>
                    Featured Speakers
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {featuredEvent.speakers.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        sx={{ bgcolor: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', fontWeight: 600 }}
                      />
                    ))}
                  </Box>

                  <Button variant="contained" color="primary" size="large" sx={{ fontWeight: 700 }}>
                    Register Now
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Upcoming Events Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0D13' }}>
        <Container maxWidth="lg">
          <SectionTitle overline="What's Coming" title="Upcoming Events" />
          <Grid container spacing={3}>
            {upcomingEvents.map((event) => (
              <Grid key={event.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#181C27' }}>
                  <CardContent sx={{ flex: 1 }}>
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
                        sx={{ bgcolor: 'rgba(201,168,76,0.1)', color: '#C9A84C', fontWeight: 600, fontSize: '0.68rem', border: '1px solid rgba(201,168,76,0.25)' }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', lineHeight: 1.4, mb: 1.5 }}
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
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>{event.time}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 15, color: '#C9A84C' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>{event.location}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  )
}
