import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Group from '@mui/icons-material/Group'
import Attachment from '@mui/icons-material/Attachment'
import Comment from '@mui/icons-material/Comment'
import { Card as MuiCard } from '@mui/material'
import PropTypes from 'prop-types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useDispatch } from 'react-redux'
import { showModalActiveCard, updateCurrentActiveCard } from '~/redux/activeCard/activeCardSlice'

export default function Card({ card }) {
  const dispatch = useDispatch()
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })

  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71' : undefined
  }

  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  const setActiveCard = () => {
    dispatch(updateCurrentActiveCard(card))
    dispatch(showModalActiveCard())
  }

  return (
    <MuiCard
      onClick={setActiveCard}
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset',
        display: card?.FE_PlaceholderCard ? 'none' : 'block',
        border: '1px solid transparent',
        '&:hover': { borderColor: (theme) => theme.palette.primary.main }
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() && (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length && (
            <Button size='small' startIcon={<Group />}>
              {card.memberIds.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button size='small' startIcon={<Comment />}>
              {card?.comments?.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button size='small' startIcon={<Attachment />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    cover: PropTypes.bool,
    image: PropTypes.string,
    title: PropTypes.string,
    memberIds: PropTypes.array,
    comments: PropTypes.array,
    attachments: PropTypes.array,
    FE_PlaceholderCard: PropTypes.bool
  }).isRequired
}
