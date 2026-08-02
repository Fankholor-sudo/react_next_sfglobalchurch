'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import PageLayout from '@/components/PageLayout'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import ContactForm from '@/components/connect/ContactForm'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import IconButton from '@mui/material/IconButton'
import { TikTokIcon } from '@/components/utils'

const serviceTimes = [
  { label: 'Sunday Service', time: '10:00 AM' },
  { label: 'Friday Prayer Night', time: '18:00 PM' },
  { label: 'Monday Midnight Hour Prayer', time: '00:00 AM' },
]

const contactDetails = [
  { icon: <LocationOnIcon />, label: 'Address', value: '1025 Park Street, Hatfield, Pretoria, Gauteng, 0083, South Africa' },
  { icon: <PhoneIcon />, label: 'Phone', value: '+27 78 714 1157' },
  { icon: <EmailIcon />, label: 'Email', value: 'info@spiritfountain.org' },
]

const socialLinks = [
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://web.facebook.com/Spiritfountaininternational' },
  { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://www.youtube.com/@dominiontelevision-b4y' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/spiritfountainint/' },
  { icon: <TikTokIcon />, label: 'Tiktok', href: 'https://www.tiktok.com/@spiritfountainglobalchur' },
]

export default function ConnectPage() {
  return (
    <PageLayout>
      <PageHero
        title="Connect With Us"
        subtitle="We would love to hear from you. Reach out, plan your visit, or get involved in our community."
      />

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionTitle overline="Get In Touch" title="Send Us a Message" align="left" />
              <ContactForm />
            </Grid>

            {/* Info Panel */}
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionTitle overline="Find Us" title="Contact Info" align="left" />

              <Card sx={{ bgcolor: '#181C27', mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  {contactDetails.map((item, i) => (
                    <Box key={i}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', py: 2 }}>
                        <Box
                          sx={{
                            bgcolor: 'rgba(201,168,76,0.1)',
                            color: '#C9A84C',
                            p: 1.2,
                            borderRadius: 1,
                            border: '1px solid rgba(201,168,76,0.2)',
                            flexShrink: 0,
                            display: 'flex',
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', mb: 0.5 }}>
                            {item.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            {item.value}
                          </Typography>
                        </Box>
                      </Box>
                      {i < contactDetails.length - 1 && <Divider />}
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Service Times */}
              <Card sx={{ bgcolor: '#181C27', mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <AccessTimeIcon sx={{ color: '#C9A84C' }} />
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-cinzel), serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: '#FFFFFF',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Service Times
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  {serviceTimes.map((s, i) => (
                    <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                      <Typography variant="body2" sx={{ color: '#B0B8CC', fontWeight: 500 }}>
                        {s.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.82rem' }}>
                        {s.time}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card sx={{ bgcolor: '#181C27' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#FFFFFF',
                      mb: 2,
                      letterSpacing: '0.05em',
                    }}
                  >
                    Follow Us Online
                  </Typography>
                  <Divider sx={{ mb: 2.5 }} />
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    {socialLinks.map((s) => (
                      <IconButton
                        key={s.label}
                        component="a"
                        href={s.href}
                        aria-label={s.label}
                        sx={{
                          color: '#B0B8CC',
                          border: '1px solid rgba(201,168,76,0.2)',
                          borderRadius: 1,
                          '&:hover': {
                            color: '#C9A84C',
                            borderColor: '#C9A84C',
                            bgcolor: 'rgba(201,168,76,0.08)',
                          },
                        }}
                      >
                        {s.icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map placeholder */}
      <Box
        sx={{
          height: { xs: 280, md: 400 },
          bgcolor: '#181C27',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <LocationOnIcon sx={{ fontSize: 48, color: '#C9A84C', mb: 1 }} />
          <Typography
            sx={{
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: 700,
              color: '#FFFFFF',
              fontSize: '1.1rem',
              mb: 0.5,
            }}
          >
            Spirit Fountain Global Church
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1025 Park Street, Hatfield, Pretoria, Gauteng, 0083
          </Typography>
          <Typography
            component="a"
            href="https://maps.app.goo.gl/oykscqv3vHs74Gom7"
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            sx={{ color: '#C9A84C', mt: 1, display: 'block', textDecoration: 'underline', fontWeight: 600 }}
          >
            Get Directions on Google Maps
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  )
}
