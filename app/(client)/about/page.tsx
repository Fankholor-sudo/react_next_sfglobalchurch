'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import PageLayout from '@/app/components/PageLayout'
import PageHero from '@/app/components/PageHero'
import SectionTitle from '@/app/components/SectionTitle'
import { leadership, values } from '@/public/data'
import LeaderCard from '@/app/components/about/leadercard'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spirit Fountain Global Church, our mission, vision and commitment to raising champions for God in Pretoria.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="Get to know Spirit Fountain Global Church — who we are, what we believe, and why we do what we do."
        bgImage="/images/about-bg.png"
      />

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'stretch' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  borderLeft: '4px solid #C9A84C',
                  pl: 4,
                  py: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-open-sans), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    color: '#C9A84C',
                    textTransform: 'uppercase',
                    mb: 1.5,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    mb: 2,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                  }}
                >
                  Raising Kingdom Champions
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  Our mission is to preach the undiluted Gospel of Jesus Christ, make disciples of all nations, and equip every believer to walk in their God-given dominion spiritually, financially, relationally, and vocationally.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  borderLeft: '4px solid rgba(201,168,76,0.4)',
                  pl: 4,
                  py: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-open-sans), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    color: '#C9A84C',
                    textTransform: 'uppercase',
                    mb: 1.5,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    mb: 2,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                  }}
                >
                  A Church Without Walls
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  To be a Spirit-filled, Word-grounded, and community, impacting church that raises leaders who dominate every sphere of society, government, business, arts, education, and family for the advancement of God's kingdom.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About with image */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0D13' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image
                  src="/images/about.jpg"
                  alt="Spirit Fountain Global Church community"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionTitle overline="Our Story" title="How It All Began" align="left" />
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
                Spirit Fountain Global Church was founded on a simple yet profound conviction: that God has called every believer to rise above mediocrity, walk in divine dominion, and bring heaven&apos;s reality to earth.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
                What started as a small gathering of passionate believers in a living room has grown into a thriving, multi-generational church community. Today, we are hundreds strong, worshipping, learning, serving, and growing together.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                Our church is not just a building, it is a movement. A movement of people who dare to believe that they were Created to Dominate and Formed to Take Over.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
        <Container maxWidth="lg">
          <SectionTitle overline="What We Stand For" title="Our Core Values" />
          <Grid container spacing={3}>
            {values.map((value, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', bgcolor: '#181C27', textAlign: 'center', p: 1 }}>
                  <CardContent>
                    <Typography sx={{ color: '#C9A84C', fontSize: '1.8rem', mb: 2 }}>{value.icon}</Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-cinzel), serif',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        mb: 2,
                        fontSize: '1rem',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Leadership */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0D13' }}>
        <Container maxWidth="lg">
          <SectionTitle
            overline="Meet the Team"
            title="Our Leadership"
            subtitle="Servant leaders who are passionate about people and the purposes of God."
          />
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {leadership[0] && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                  <LeaderCard leader={leadership[0]} featured />
                </Grid>
              </Box>
            )}
          
            {leadership.slice(1).map((leader) => (
              <Grid key={leader.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <LeaderCard leader={leader} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  )
}
