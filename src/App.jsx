import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { UserProvider, useUser } from './context/userContext'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Upsert from './components/Upsert'
import RoutesWrapper from './RoutesWrapper'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <RoutesWrapper />
      </Router>
    </UserProvider>
  )
}

export default App
