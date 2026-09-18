'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent'
import PageLayout from '@/app/components/PageLayout'
import PageHero from '@/app/components/PageHero'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import SectionTitle from '@/app/components/SectionTitle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useEvents } from '@/app/(client)/hooks/useEvents'
import { formatDay, formatMonth } from '@/app/helpers/utils'
import { YouTubeEvent } from '@/app/utility/types'
import { AlertTitle } from '@mui/material'

export default function EventsPage() {
  const { events, loading, error } = useEvents()
  const closestEvent: YouTubeEvent | null = events[0] || null

  return (
    <PageLayout>
      <PageHero
        title="Events"
        subtitle="Life-changing gatherings to build your faith, strengthen community, and encounter God's presence."
        bgImage="/images/events-bg.png"
      />

      {/* Featured Event */}
      { loading ? (
        <Container 
          maxWidth="sm"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '55vh'
          }}>
          <CircularProgress size={26} color='inherit' />
        </Container> 
      ) : error ? (
        <Container 
          maxWidth="sm"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '55vh'
          }}
        >
          <Alert severity="error" variant="outlined">
            <AlertTitle>Error</AlertTitle>
            We’re having trouble loading upcoming events at the moment, but please don’t worry, 
            our team is working to get everything back up and running. 
            Please try again shortly. <br/><br/>Thank you for your patience and understanding. 
            <br/><br/>God bless you!
          </Alert>
        </Container> 
      ) : closestEvent === null ? (
        <Container 
          maxWidth="sm"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '55vh'
          }}
        >
          <Alert severity="info" variant="outlined">
            <AlertTitle>Info</AlertTitle>
            We don’t have any upcoming events at the moment. Please check back soon for new events and announcements. 
            <br/>Thank you for your patience and understanding.
            <br/><br/>God bless you!
          </Alert>
        </Container> 
      ) : (
        <Box>
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
                        image={closestEvent?.thumbnail}
                        alt={closestEvent.title}
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
                          {closestEvent.tag}
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
                        {closestEvent.title}
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                        {[
                          { icon: <CalendarMonthIcon sx={{ fontSize: 16 }} />, text: closestEvent.date },
                          { icon: <AccessTimeIcon sx={{ fontSize: 16 }} />, text: closestEvent.time },
                          { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, text: closestEvent.location },
                        ].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <Box sx={{ color: '#C9A84C', mt: 0.15, flexShrink: 0 }}>{item.icon}</Box>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>{item.text}</Typography>
                          </Box>
                        ))}
                      </Box>

                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
                        {closestEvent.description}
                      </Typography>

                      <Divider sx={{ mb: 2.5 }} />

                      <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.5 }}>
                        Featured Speakers
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {closestEvent.speakers.map((s) => (
                          <Chip
                            key={s}
                            label={s}
                            size="small"
                            sx={{ bgcolor: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)', fontWeight: 600 }}
                          />
                        ))}
                      </Box>
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
                {events.map((event) => (
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
                              {formatDay(event.date)}
                            </Typography>
                            <Typography sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                              {formatMonth(event.date)}
                            </Typography>
                          </Box>
                          <Chip
                            label={event.tag}
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
        </Box>
      )}
    </PageLayout>
  )
}
