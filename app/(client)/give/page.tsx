'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import PageLayout from '@/app/components/PageLayout'
import PageHero from '@/app/components/PageHero'
import SectionTitle from '@/app/components/SectionTitle'
import GiveForm from '@/app/components/give/GiveForm'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChurchIcon from '@mui/icons-material/Church'
import PeopleIcon from '@mui/icons-material/People'
import PublicIcon from '@mui/icons-material/Public'

const givingReasons = [
  {
    icon: <ChurchIcon sx={{ fontSize: 32 }} />,
    title: 'Build the House',
    description: 'Your giving helps us maintain, upgrade, and expand our facilities to accommodate our growing congregation.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 32 }} />,
    title: 'Community Impact',
    description: 'We run feeding schemes, orphan care, youth programs, and addiction recovery initiatives in our community.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 32 }} />,
    title: 'Global Missions',
    description: 'We support missionaries and church plants across Africa and beyond, taking the Gospel to the nations.',
  },
]

const bankDetails = [
  { label: 'Bank', value: 'First National Bank (FNB)' },
  { label: 'Account Name', value: 'Spirit Fountain International' },
  { label: 'Account Number', value: '628 1758 1467' },
  { label: 'Branch Code', value: '250 655' },
  { label: 'Account Type', value: 'Cheque / Current' },
  { label: 'Reference', value: 'Your Name + Giving Type' },
]

export default function GivePage() {
  return (
    <PageLayout>
      <PageHero
        title="Give"
        subtitle="Partner with us to advance God's kingdom. Every seed you sow makes an eternal difference."
      />

      {/* Why Give */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0F1117' }}>
        <Container maxWidth="lg">
          <SectionTitle
            overline="Kingdom Investment"
            title="Why We Give"
            subtitle="Giving is an act of worship and faith. It opens the windows of heaven and positions you for supernatural increase."
          />

          {/* Scripture Banner */}
          <Box
            sx={{
              border: '2px solid rgba(201,168,76,0.3)',
              borderRadius: 2,
              p: { xs: 3, md: 5 },
              textAlign: 'center',
              mb: 6,
              position: 'relative',
              bgcolor: 'rgba(201,168,76,0.03)',
            }}
          >
            <FavoriteBorderIcon sx={{ fontSize: 36, color: '#C9A84C', mb: 2 }} />
            <Typography
              sx={{
                fontFamily: 'var(--font-cinzel), serif',
                fontStyle: 'italic',
                color: '#FFFFFF',
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              &ldquo;Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the LORD Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.&rdquo;
            </Typography>
            <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.9rem' }}>
              Malachi 3:10
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {givingReasons.map((reason, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card sx={{ bgcolor: '#181C27', height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ color: '#C9A84C', mb: 2 }}>{reason.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-cinzel), serif',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        mb: 2,
                      }}
                    >
                      {reason.title}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {reason.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Give Form + Bank Details */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0A0D13' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'flex-start' }}>
            {/* Give Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionTitle overline="Online Giving" title="Make a Gift" align="left" />
              <Card sx={{ bgcolor: '#181C27', p: { xs: 1, md: 2 } }}>
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <GiveForm />
                </CardContent>
              </Card>
            </Grid>

            {/* Bank Details */}
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionTitle overline="Direct Transfer" title="Bank Details" align="left" />
              <Card sx={{ bgcolor: '#181C27' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    Make a direct EFT transfer using the banking details below. Please use your name and giving type as reference.
                  </Typography>
                  {bankDetails.map((item, i) => (
                    <Box key={i}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 1.5 }}>
                        <Typography variant="body2" sx={{ color: '#B0B8CC', fontWeight: 500, mr: 2 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 700, textAlign: 'right' }}>
                          {item.value}
                        </Typography>
                      </Box>
                      {i < bankDetails.length - 1 && <Divider />}
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Pledge box */}
              <Box
                sx={{
                  mt: 3,
                  p: 3,
                  border: '1px solid rgba(201,168,76,0.25)',
                  borderRadius: 2,
                  bgcolor: 'rgba(201,168,76,0.04)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontWeight: 700,
                    color: '#C9A84C',
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    mb: 1.5,
                  }}
                >
                  Need to Make a Pledge?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  For large pledges, building fund commitments, or to set up a recurring giving arrangement, please contact our finance team at{' '}
                  <Typography component="span" sx={{ color: '#C9A84C' }}>
                    dominiontvsfi@gmail.com
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  )
}
