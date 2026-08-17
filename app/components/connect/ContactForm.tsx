'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import MenuItem from '@mui/material/MenuItem'
import SendIcon from '@mui/icons-material/Send'

const subjects = [
  'General Enquiry',
  'Prayer Request',
  'Membership Information',
  'Event Registration',
  'Counselling',
  'Other',
]

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    color: '#FFFFFF',
    '& fieldset': { borderColor: 'rgba(201,168,76,0.3)' },
    '&:hover fieldset': { borderColor: '#C9A84C' },
    '&.Mui-focused fieldset': { borderColor: '#C9A84C' },
  },
  '& .MuiInputLabel-root': { color: '#B0B8CC' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#C9A84C' },
  '& .MuiSelect-icon': { color: '#B0B8CC' },
}

export default function ContactForm() {
  const [subject, setSubject] = React.useState('General Enquiry')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Alert
        severity="success"
        sx={{
          bgcolor: 'rgba(201,168,76,0.1)',
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.3)',
          '& .MuiAlert-icon': { color: '#C9A84C' },
        }}
      >
        Thank you for reaching out! We will get back to you within 24–48 hours. God bless you.
      </Alert>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="First Name" required variant="outlined" sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Last Name" required variant="outlined" sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Email Address" type="email" required variant="outlined" sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Phone Number" variant="outlined" sx={fieldSx} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            select
            label="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="outlined"
            sx={fieldSx}
            slotProps={{
              select: {
                MenuProps: {
                  slotProps: { paper: { sx: { bgcolor: '#181C27', border: '1px solid rgba(201,168,76,0.2)' } } },
                },
              },
            }}
          >
            {subjects.map((s) => (
              <MenuItem key={s} value={s} sx={{ color: '#FFFFFF', '&:hover': { bgcolor: 'rgba(201,168,76,0.08)' } }}>
                {s}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Your Message"
            multiline
            rows={5}
            required
            variant="outlined"
            sx={fieldSx}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon />}
            sx={{ fontWeight: 700, px: 5 }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
