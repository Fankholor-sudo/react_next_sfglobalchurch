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

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
    }
    console.log(data)
    setSubmitted(true)
    handleReset()
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
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [submitted])

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
