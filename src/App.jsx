import { Navigate, Route, Routes } from 'react-router-dom'
import Boards from './pages/Boards/_id'
import NotFound from './pages/404/NotFound'
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/boards/67b2fd22bad16c7394d3b5cf' replace={true} />} />
      <Route path='/boards/:boardId' element={<Boards />} />

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
