import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Board from './pages/Boards/_id'
import NotFound from './pages/404/NotFound'
import Auth from './pages/Auth/Auth'
import AccountVerification from './pages/Auth/AccountVerification'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './redux/user/userSlice'
import PropTypes from 'prop-types'
import Settings from './pages/Settings/Settings'
import Boards from './pages/Boards'

const ProtectedRoute = ({ user }) => {
  if (!user) return <Navigate to='/login' replace={true} />
  return <Outlet />
}

ProtectedRoute.propTypes = {
  user: PropTypes.object.isRequired
}

function App() {
  const currentUser = useSelector(selectCurrentUser)
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/boards' replace={true} />} />

      <Route element={<ProtectedRoute user={currentUser} />}>
        <Route path='/boards/:boardId' element={<Board />} />
        <Route path='/boards' element={<Boards />} />

        <Route path='/settings/account' element={<Settings />} />
        <Route path='/settings/security' element={<Settings />} />
      </Route>

      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
