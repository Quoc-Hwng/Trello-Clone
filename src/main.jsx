import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import { ConfirmProvider } from 'material-ui-confirm'
import { Provider } from 'react-redux'
import { store } from '~/redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConfirmProvider
          defaultOptions={{
            allowClose: false,
            dialogProps: { maxWidth: 'xs' },
            cancellationButtonProps: { color: 'inherit' },
            confirmationButtonProps: { color: 'secondary', variant: 'outlined' }
          }}
        >
          <CssBaseline />
          <App />
          <ToastContainer />
        </ConfirmProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
