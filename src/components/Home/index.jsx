import { Navigate } from 'react-router-dom'
import { useUser } from '../../context/userContext'
import { Container } from 'semantic-ui-react'

const Home = () => {
  const { user } = useUser()
  console.log(user)

  return (
    <div>
      {user ? (
        <Container
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>welcome {user.firstName}</p>
        </Container>
      ) : (
        <Navigate to='/login' />
      )}
    </div>
  )
}

export default Home
