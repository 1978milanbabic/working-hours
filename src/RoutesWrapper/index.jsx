import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '../context/userContext'
import Home from '../components/Home'
import Upsert from '../components/Upsert'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

const RoutesWrapper = () => {
  const { user } = useUser()
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'))
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('token'))
  }, [user])
  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path='/' exact element={<Home />} />
          <Route path='/upsert' element={<Upsert />} />
          <Route path='/login' element={<Navigate to='/' />} />
          <Route path='*' element={<NotFound />} />
        </>
      ) : (
        <>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate from='*' to='/login' />} />
        </>
      )}
    </Routes>
  )
}

export default RoutesWrapper
