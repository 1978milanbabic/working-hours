import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useUser } from '../../context/userContext'
import { Button, Container, Header, Segment } from 'semantic-ui-react'
import CreateEventModal from '../../modals/CreateEventModal'

const Upsert = (props) => {
  const { user } = useUser()
  const location = useLocation()
  const navigate = useNavigate()
  const [openCreateModal, setOpenCreateModal] = useState(false)

  const dayNames = ['ponedeljak', 'utorak', 'sreda', 'cetvrtak', 'petak', 'subota', 'nedelja']
  let currentDayNumber = location.pathname.split('/')
  currentDayNumber = currentDayNumber[currentDayNumber.length - 1]
  const currentDayName = dayNames[currentDayNumber]
  console.log('🚀 -> Upsert -> currentDayName:\n\r', currentDayName)

  const handleCloseModal = () => setOpenCreateModal(false)

  return (
    <div style={{ padding: '10px 0', height: '100vh' }}>
      <Container>
        <Segment attached='top'>
          <Header>
            Sablon za {currentDayName}
            <Button primary floated='right' style={{ transform: 'translateY(-6px)' }} onClick={() => navigate('/')}>{`< Nazad`}</Button>
          </Header>
        </Segment>
        <Segment attached>
          <Button
            onClick={() => {
              setOpenCreateModal(true)
            }}
          >
            Dodaj
          </Button>
        </Segment>
        <Segment attached>
          <Header>Ukupno sati: {}</Header>
        </Segment>
        <Segment attached='bottom'>
          <Button primary>Save</Button>
          &emsp;
          <Button onClick={() => navigate('/')}>Cancel {`(go back)`}</Button>
        </Segment>
      </Container>
      <CreateEventModal open={openCreateModal} closeModal={handleCloseModal} selectedDayForModal={currentDayNumber} />
    </div>
  )
}

export default Upsert
