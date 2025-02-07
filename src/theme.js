import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemeSelector: 'class',
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#1976d2'
        // },
        // secondary: {
        //   main: '#dc004e'
        // }
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#90caf9'
        // },
        // secondary: {
        //   main: '#f48fb1'
        // }
      }
    }
  }
})
export default theme
