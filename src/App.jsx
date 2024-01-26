import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { UserProvider, useUser } from './context/userContext'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
