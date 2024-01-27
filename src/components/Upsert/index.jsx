import { Navigate } from 'react-router-dom'
import { useUser } from '../../context/userContext'

const Upsert = (props) => {
  const { user } = useUser()
  console.log(user?.firstName)
  return <p>{user?.firstName}</p>
  // return <>{user ? <p>Upsert</p> : <Navigate to='/login' />}</>
}

export default Upsert
