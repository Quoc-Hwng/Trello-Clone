import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Dashboard from '@mui/icons-material/Dashboard'
import VpnLock from '@mui/icons-material/VpnLock'
import AddToDrive from '@mui/icons-material/AddToDrive'
import Bolt from '@mui/icons-material/Bolt'
import FilterList from '@mui/icons-material/FilterList'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAdd from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'
import PropTypes from 'prop-types'
import BoardUserGroup from './BoardUserGroup'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  ' .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

export default function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<Dashboard />} label={board?.title} clickable sx={MENU_STYLES} />
        <Chip icon={<VpnLock />} label={capitalizeFirstLetter(board?.type)} clickable sx={MENU_STYLES} />
        <Chip icon={<AddToDrive />} label='Add To Google Drive' clickable sx={MENU_STYLES} />
        <Chip icon={<Bolt />} label='Automation' clickable sx={MENU_STYLES} />
        <Chip icon={<FilterList />} label='Filter' clickable sx={MENU_STYLES} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAdd />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >
          Invite
        </Button>
        <BoardUserGroup boardUsers={board?.FE_allUsers} />
      </Box>
    </Box>
  )
}

BoardBar.propTypes = {
  board: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    FE_allUsers: PropTypes.array
  }).isRequired
}
