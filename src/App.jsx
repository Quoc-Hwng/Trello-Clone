import { ThreeDRotation } from '@mui/icons-material'
import { Button, useColorScheme } from '@mui/material'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>{mode === 'light' ? 'Dark' : 'Light'}</Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <Button>Haha</Button>
      <ThreeDRotation />
    </>
  )
}

export default App
