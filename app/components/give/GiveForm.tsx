'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MenuItem from '@mui/material/MenuItem'
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'
import FavoriteIcon from '@mui/icons-material/Favorite'

const presetAmounts = ['50', '100', '200', '500', '1000']

const givingTypes = [
  'Tithes',
  'Offering',
  'Building Fund',
  'Missions',
  'Community Outreach',
  'Special Projects',
]

const fieldSlotProps = {
  inputLabel: { sx: { color: '#B0B8CC', '&.Mui-focused': { color: '#C9A84C' } } },
  input: { sx: { color: '#FFFFFF' } },
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'rgba(201,168,76,0.3)' },
    '&:hover fieldset': { borderColor: '#C9A84C' },
    '&.Mui-focused fieldset': { borderColor: '#C9A84C' },
  },
}

export default function GiveForm() {
  const [amount, setAmount] = React.useState<string>('100')
  const [customAmount, setCustomAmount] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handlePreset = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      setAmount(newValue)
      setCustomAmount('')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <FavoriteIcon sx={{ fontSize: 56, color: '#C9A84C', mb: 2 }} />
        <Typography
          variant="h5"
          sx={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 700, color: '#FFFFFF', mb: 1 }}
        >
          Thank You for Your Generosity!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Your gift has been received. May God multiply it back to you thirty, sixty, and one hundredfold.
        </Typography>
        <Typography sx={{ color: '#C9A84C', fontStyle: 'italic', fontFamily: 'var(--font-cinzel), serif' }}>
          &ldquo;God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
        </Typography>
      </Box>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* Giving Type */}
      <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', mb: 1.5 }}>
        Giving Type
      </Typography>
      <TextField
        fullWidth
        select
        defaultValue="Tithes"
        variant="outlined"
        sx={{ mb: 3, ...fieldSx }}
        slotProps={{
          inputLabel: { sx: { color: '#B0B8CC', '&.Mui-focused': { color: '#C9A84C' } } },
          input: { sx: { color: '#FFFFFF' } },
          select: {
            MenuProps: {
              slotProps: { paper: { sx: { bgcolor: '#181C27', border: '1px solid rgba(201,168,76,0.2)' } } },
            },
          },
        }}
      >
        {givingTypes.map((t) => (
          <MenuItem key={t} value={t} sx={{ color: '#FFFFFF', '&:hover': { bgcolor: 'rgba(201,168,76,0.08)' } }}>
            {t}
          </MenuItem>
        ))}
      </TextField>

      {/* Amount Selection */}
      <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', mb: 1.5 }}>
        Select Amount (ZAR)
      </Typography>
      <ToggleButtonGroup
        value={amount}
        exclusive
        onChange={handlePreset}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mb: 2,
          '& .MuiToggleButton-root': {
            color: '#B0B8CC',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '4px !important',
            px: 2.5,
            py: 1,
            fontWeight: 700,
            '&.Mui-selected': {
              bgcolor: '#C9A84C',
              color: '#0F1117',
              borderColor: '#C9A84C',
              '&:hover': { bgcolor: '#E0C470' },
            },
            '&:hover': { bgcolor: 'rgba(201,168,76,0.08)', borderColor: '#C9A84C' },
          },
        }}
      >
        {presetAmounts.map((a) => (
          <ToggleButton key={a} value={a}>
            R {a}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <TextField
        fullWidth
        label="Or enter a custom amount (ZAR)"
        type="number"
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(e.target.value)
          setAmount('')
        }}
        variant="outlined"
        sx={{ mb: 3, ...fieldSx }}
        slotProps={{
          ...fieldSlotProps,
          htmlInput: { min: 1 },
        }}
      />

      <Divider sx={{ mb: 3 }} />

      {/* Personal Details */}
      <Typography sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', mb: 2 }}>
        Your Details
      </Typography>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth label="First Name" required variant="outlined"
            sx={fieldSx} slotProps={fieldSlotProps}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth label="Last Name" required variant="outlined"
            sx={fieldSx} slotProps={fieldSlotProps}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth label="Email Address" type="email" required variant="outlined"
            sx={fieldSx} slotProps={fieldSlotProps}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth label="Phone Number" variant="outlined"
            sx={fieldSx} slotProps={fieldSlotProps}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Alert
            severity="info"
            sx={{
              bgcolor: 'rgba(201,168,76,0.06)',
              color: '#B0B8CC',
              border: '1px solid rgba(201,168,76,0.2)',
              fontSize: '0.8rem',
              '& .MuiAlert-icon': { color: '#C9A84C' },
            }}
          >
            Payment processing details will be confirmed by our finance team. You will receive an email with banking details and a reference number.
          </Alert>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            startIcon={<FavoriteIcon />}
            sx={{ fontWeight: 700, py: 1.8, fontSize: '1rem' }}
          >
            Give Now — R {customAmount || amount || '0'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
