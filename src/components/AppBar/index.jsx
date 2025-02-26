import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import HelpOutline from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import Button from '@mui/material/Button'
import LibraryAdd from '@mui/icons-material/LibraryAdd'
import Templates from './Menus/Templates'
import InputAdornment from '@mui/material/InputAdornment'
import Search from '@mui/icons-material/Search'
import Close from '@mui/icons-material/Close'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Notifications from './Notifications/Notifications'

export default function AppBar() {
  const [searchValue, setSearchValue] = useState('')
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
          <TextField
            id='outlined-search'
            label='Search...'
            type='text'
            size='small'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <Close
                      fontSize='small'
                      sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                      onClick={() => setSearchValue('')}
                    />
                  </InputAdornment>
                )
              }
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '170px',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
          />
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
