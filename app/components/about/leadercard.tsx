import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material'

export type Leader = {
  name: string
  title: string
  bio: string
  image?: string
}

type LeaderCardProps = {
  leader: Leader
  featured?: boolean
}

export default function LeaderCard({ leader, featured = false }: LeaderCardProps) {
  return (
    <Card sx={{ bgcolor: '#181C27', textAlign: 'center', height: '100%' }}>
      <CardContent sx={{ pt: 4, pb: 3 }}>
        <Avatar
          src={leader.image}
          alt={leader.name}
          sx={{
            width: 100,
            height: 100,
            mx: 'auto',
            mb: 2,
            bgcolor: '#C9A84C',
            border: '2px solid #C9A84C',
          }}
        />

        <Typography
          variant={'h6'}
          sx={{
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: 700,
            color: '#FFFFFF',
            fontSize: '1rem',
            mb: 0.5,
          }}
        >
          {leader.name}
        </Typography>

        <Typography
          sx={{
            color: '#C9A84C',
            fontWeight: 600,
            fontSize: '0.78rem',
            letterSpacing: '0.05em',
            mb: 2,
          }}
        >
          {leader.title}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          {leader.bio}
        </Typography>
      </CardContent>
    </Card>
  )
}