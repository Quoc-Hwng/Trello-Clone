import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Group from '@mui/icons-material/Group'
import Attachment from '@mui/icons-material/Attachment'
import Comment from '@mui/icons-material/Comment'
import { Card as MuiCard } from '@mui/material'

export default function Card() {
  return (
    <MuiCard sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
      <CardMedia
        sx={{ height: 140 }}
        image='https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg'
        title='green iguana'
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>San San Whale</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size='small' startIcon={<Group />}>
          20
        </Button>
        <Button size='small' startIcon={<Comment />}>
          15
        </Button>
        <Button size='small' startIcon={<Attachment />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  )
}
