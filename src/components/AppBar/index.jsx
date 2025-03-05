import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Tooltip from '@mui/material/Tooltip'
import HelpOutline from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import Button from '@mui/material/Button'
import LibraryAdd from '@mui/icons-material/LibraryAdd'
import Templates from './Menus/Templates'
import { Link } from 'react-router-dom'
import Notifications from './Notifications/Notifications'
import AutoCompleteSearchBoard from './SearchBoards/AutoCompleteSearchBoard'

export default function AppBar() {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link to='/boards'>
            <Tooltip title='Board List'>
              <AppsIcon sx={{ color: 'white', verticalAlign: 'middle' }} />
            </Tooltip>
          </Link>
          <Link to='/'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'white' }} fontSize='small' />
              <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                Trello
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button sx={{ color: 'white', borderColor: 'white' }} variant='outlined' startIcon={<LibraryAdd />}>
              Create
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AutoCompleteSearchBoard />
          <ModeSelect />
          <Notifications />
          <Tooltip title='Help'>
            <HelpOutline sx={{ color: 'white', display: { xs: 'none', md: 'block' } }} />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}
