import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const stats = [
  { value: '5+', label: 'Years of Ministry' },
  { value: '500+', label: 'Members & Growing' },
  { value: '10+', label: 'Community Programs' },
  { value: '2', label: 'Ministries & Departments' },
]

export default function StatsStrip() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        bgcolor: '#C9A84C',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {stats.map((stat, i) => (
            <Grid key={i} size={{ xs: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontWeight: 900,
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    color: '#0F1117',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-open-sans), sans-serif',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    color: 'rgba(15,17,23,0.75)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
