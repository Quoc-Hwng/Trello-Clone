import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NoteAdd from '@mui/icons-material/NoteAdd'
import Close from '@mui/icons-material/Close'

import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ListColumns({ columns, createNewColumn, createNewCard }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState('')

  const addNewColumn = async () => {
    if (!newColumnTitle) {
      toast.error('Please enter Column Title')
      return
    }

    const newColumnData = {
      title: newColumnTitle
    }

    await createNewColumn(newColumnData)

    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

  return (
    <SortableContext items={columns?.map((c) => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        {columns?.map((column) => (
          <Column key={column._id} column={column} createNewCard={createNewCard} />
        ))}

        {/* Add new column */}
        {!openNewColumnForm ? (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d'
            }}
          >
            <Button
              startIcon={<NoteAdd />}
              sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
              onClick={toggleOpenNewColumnForm}
            >
              Add new column
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <TextField
              label='Enter column title'
              type='text'
              size='small'
              autoFocus
              variant='outlined'
              onChange={(e) => setNewColumnTitle(e.target.value)}
              sx={{
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
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center'
              }}
            >
              <Button
                variant='contained'
                color='success'
                size='small'
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  color: 'white',
                  borderColor: (them) => them.palette.success.main,
                  '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                }}
                onClick={addNewColumn}
              >
                Add Column
              </Button>
              <Close
                fontSize='small'
                sx={{ color: 'white', cursor: 'pointer', '&:hover': { color: (theme) => theme.palette.warning.light } }}
                onClick={toggleOpenNewColumnForm}
              />
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  )
}

ListColumns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
}
