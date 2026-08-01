'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import useScrollTrigger from '@mui/material/useScrollTrigger'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Events', href: '/events' },
  { label: 'Connect', href: '/connect' },
  { label: 'Give', href: '/give' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const pathname = usePathname()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })

  const toggleDrawer = () => setDrawerOpen((prev) => !prev)

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? 'rgba(15,17,23,0.98)' : 'rgba(15,17,23,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1280px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 4 },
            minHeight: { xs: 64, md: 72 },
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <Image
              src="/images/logo-church.jpg"
              alt="Spirit Fountain Global Church Logo"
              width={48}
              height={48}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: '#C9A84C',
                  lineHeight: 1.2,
                  letterSpacing: '0.05em',
                }}
              >
                Spirit Fountain
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontWeight: 400,
                  fontSize: '0.7rem',
                  color: '#B0B8CC',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Global Church
              </Box>
            </Box>
          </Link>

          {/* Desktop Nav */}
          <Box
            component="nav"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: isActive ? '#C9A84C' : '#FFFFFF',
                    fontFamily: 'var(--font-open-sans), sans-serif',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    px: 1.5,
                    py: 1,
                    borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': {
                      color: '#C9A84C',
                      bgcolor: 'transparent',
                      borderBottom: '2px solid rgba(201,168,76,0.5)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              )
            })}
            <Button
              component={Link}
              href="/give"
              variant="contained"
              color="primary"
              sx={{ ml: 2, fontWeight: 700, fontSize: '0.8rem' }}
            >
              Give Now
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Open navigation menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#C9A84C' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              bgcolor: '#0F1117',
              borderLeft: '1px solid rgba(201,168,76,0.2)',
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 2,
            borderBottom: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }} onClick={() => setDrawerOpen(false)}>
            <Image
              src="/images/logo-church.jpg"
              alt="Spirit Fountain Global Church Logo"
              width={40}
              height={40}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <Box
              component="span"
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#C9A84C',
              }}
            >
              Spirit Fountain
            </Box>
          </Link>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#B0B8CC' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 2 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderLeft: isActive ? '3px solid #C9A84C' : '3px solid transparent',
                    '&:hover': {
                      bgcolor: 'rgba(201,168,76,0.06)',
                      borderLeft: '3px solid rgba(201,168,76,0.4)',
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily: 'var(--font-cinzel), serif',
                          fontWeight: isActive ? 700 : 500,
                          fontSize: '0.9rem',
                          letterSpacing: '0.06em',
                          color: isActive ? '#C9A84C' : '#FFFFFF',
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>

        <Divider sx={{ mx: 3, my: 2 }} />

        <Box sx={{ px: 3 }}>
          <Button
            component={Link}
            href="/give"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setDrawerOpen(false)}
            sx={{ fontWeight: 700, py: 1.5 }}
          >
            Give Now
          </Button>
        </Box>
      </Drawer>
    </>
  )
}
