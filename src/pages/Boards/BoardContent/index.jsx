import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import PropTypes from 'prop-types'
import { mapOrder } from '~/utils/sort'

export default function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        p: '10px 0'
      }}
    >
      <ListColumns columns={orderedColumns} />
    </Box>
  )
}

BoardContent.propTypes = {
  board: PropTypes.shape({
    title: PropTypes.string,
    columns: PropTypes.array,
    columnOrderIds: PropTypes.array
  }).isRequired
}
