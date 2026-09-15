'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
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
  const [submitted, setSubmitted] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [subject, setSubject] = React.useState('General Enquiry')
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setLoading(true)
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    .then(async (response) => {
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      setSubmitted(true)
      handleReset()
    })
    .catch ((error) => {
      setError(true)
      console.error('Error sending contact form:', error)
    })
    .finally(() => { setLoading(false) })
  }

  const handleReset = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setSubject('General Enquiry')
    setMessage('')
  }

  React.useEffect(() => {
    if (submitted || error) {
      const timer = setTimeout(() => {
        setSubmitted(false)
        setError(false)
      }, 50000)

      return () => clearTimeout(timer)
    }
  }, [submitted, error])

  return (
    <Box component="form" onSubmit={handleSubmit}>
      { submitted && <Alert
        severity="success"
        sx={{
          mb: 5,
          bgcolor: 'rgba(201,168,76,0.1)',
          color: '#C9A84C',
          border: '1px solid rgba(201,168,76,0.3)',
          '& .MuiAlert-icon': { color: '#C9A84C' },
        }}
      >
        Thank you for reaching out! We will get back to you within 24–48 hours. God bless you.
      </Alert>}
      { error && <Alert
        severity="error"
        sx={{
          mb: 5,
          bgcolor: 'rgba(211,47,47,0.1)',
          color: '#FF6B6B',
          border: '1px solid rgba(211,47,47,0.3)',
          '& .MuiAlert-icon': {
            color: '#FF6B6B',
          },
        }}
      >
        We’re sorry, but we couldn’t send your message. Please try again later. If the problem persists, please contact us directly.
      </Alert>}
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            variant="outlined"
            sx={fieldSx}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            variant="outlined"
            sx={fieldSx}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required variant="outlined"
            sx={fieldSx}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            sx={fieldSx} 
          />
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
