import Box from '@mui/material/Box'
import Card from './Card/Card'
import PropTypes from 'prop-types'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function ListCards({ cards }) {
  ListCards.propTypes = {
    cards: PropTypes.array.isRequired
  }

  return (
    <SortableContext items={cards?.map((c) => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          p: '0 5px 5px 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) =>
            `calc( ${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da!important'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'bfc2cf'
          }
        }}
      >
        {cards?.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}
