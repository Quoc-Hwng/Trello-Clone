import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

PageLoadingSpinner.propTypes = {
  caption: PropTypes.string.isRequired
}

export default function PageLoadingSpinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100vw',
        height: '100vh'
      }}
    >
      <CircularProgress />
    </Box>
  )
}
