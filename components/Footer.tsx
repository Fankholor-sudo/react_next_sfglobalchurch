'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { TikTokIcon } from './utils'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: 'Connect', href: '/connect' },
  { label: 'Give', href: '/give' },
]

const serviceTimes = [
  { id: 'sunday', day: 'Sunday Service', time: '10:00 AM' },
  { id: 'friday', day: 'Friday Prayer Night', time: '18:00 PM' },
  { id: 'midnight', day: 'Monday Midnight Hour Prayer', time: '00:00 AM' },
]

const socialLinks = [
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://web.facebook.com/Spiritfountaininternational' },
  { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://www.youtube.com/@dominiontelevision-b4y' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/spiritfountainint/' },
  { icon: <TikTokIcon />, label: 'Tiktok', href: 'https://www.tiktok.com/@spiritfountainglobalchur' },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0A0D13',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', marginBottom: 16 }}>
              <Image
                src="/images/logo-church.jpg"
                alt="Spirit Fountain Global Church Logo"
                width={60}
                height={60}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#C9A84C',
                    lineHeight: 1.2,
                  }}
                >
                  Spirit Fountain
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontWeight: 400,
                    fontSize: '0.7rem',
                    color: '#B0B8CC',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Global Church
                </Typography>
              </Box>
            </Link>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              Created to Dominate, Formed to Take Over. A Spirit-filled community of believers growing in faith, purpose, and kingdom impact.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  size="small"
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
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#B0B8CC',
                        py: 0.5,
                        display: 'block',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#C9A84C' },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Service Times */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Service Times
            </Typography>
            {serviceTimes.map((s) => (
              <Box key={s.id} sx={{ display: 'flex', gap: 1, mb: 1.5, alignItems: 'flex-start' }}>
                <AccessTimeIcon sx={{ color: '#C9A84C', fontSize: 16, mt: 0.3, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.8rem' }}>
                    {s.day}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B0B8CC', fontSize: '0.78rem' }}>
                    {s.time}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                color: '#C9A84C',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Contact Us
            </Typography>
            {[
              { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, text: '1025 Park Street, Hatfield, Pretoria, Gauteng, 0083' },
              { icon: <PhoneIcon sx={{ fontSize: 16 }} />, text: '+27 78 714 1157' },
              { icon: <EmailIcon sx={{ fontSize: 16 }} />, text: 'dominiontvsfi@gmail.com' },
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.5, alignItems: 'flex-start' }}>
                <Box sx={{ color: '#C9A84C', mt: 0.2, flexShrink: 0 }}>{item.icon}</Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Spirit Fountain Global Church. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#C9A84C', fontSize: '0.75rem', fontStyle: 'italic' }}>
            Created to Dominate &mdash; Formed to Take Over
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
