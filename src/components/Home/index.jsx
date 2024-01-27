import { useMemo, useState } from 'react'
import { useUser } from '../../context/userContext'
import {
  Container,
  Header,
  Segment,
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  Button,
  Message,
  MessageHeader,
} from 'semantic-ui-react'
import dayjs from 'dayjs'

const Home = () => {
  const { user, logout } = useUser()
  // dateys today raw format
  const [rawToday, setRawToday] = useState(dayjs())
  // day in week
  const [todayDay, setTodayDay] = useState(7)
  // refined today format
  const [dateNow, setDateNow] = useState('')
  // this week
  const [calDays, setCalDays] = useState([])

  // today style
  const todayMark = {
    backgroundColor: '#b3d1ff',
  }

  useMemo(() => {
    // get day
    let today = dayjs()
    // set today day in week
    let todayDayNameNumber = dayjs().day()
    setTodayDay(todayDayNameNumber)
    // set today date
    let todayDate = today.format('DD. MMM YYYY.')
    setDateNow(todayDate)
    // set week
    switch (todayDayNameNumber) {
      case 1:
        setCalDays([
          todayDate,
          today.add(1, 'days').format('DD. MMM YYYY.'),
          today.add(2, 'days').format('DD. MMM YYYY.'),
          today.add(3, 'days').format('DD. MMM YYYY.'),
          today.add(4, 'days').format('DD. MMM YYYY.'),
          today.add(5, 'days').format('DD. MMM YYYY.'),
          today.add(6, 'days').format('DD. MMM YYYY.'),
        ])
        break
      case 2:
        setCalDays([
          today.subtract(1, 'days').format('DD. MMM YYYY.'),
          todayDate,
          today.add(1, 'days').format('DD. MMM YYYY.'),
          today.add(2, 'days').format('DD. MMM YYYY.'),
          today.add(3, 'days').format('DD. MMM YYYY.'),
          today.add(4, 'days').format('DD. MMM YYYY.'),
          today.add(5, 'days').format('DD. MMM YYYY.'),
        ])
        break
      case 3:
        setCalDays([
          today.subtract(2, 'days').format('DD. MMM YYYY.'),
          today.subtract(1, 'days').format('DD. MMM YYYY.'),
          todayDate,
          today.add(1, 'days').format('DD. MMM YYYY.'),
          today.add(2, 'days').format('DD. MMM YYYY.'),
          today.add(3, 'days').format('DD. MMM YYYY.'),
          today.add(4, 'days').format('DD. MMM YYYY.'),
        ])
        break
      case 4:
        setCalDays([
          today.subtract(3, 'days').format('DD. MMM YYYY.'),
          today.subtract(2, 'days').format('DD. MMM YYYY.'),
          today.subtract(1, 'days').format('DD. MMM YYYY.'),
          todayDate,
          today.add(1, 'days').format('DD. MMM YYYY.'),
          today.add(2, 'days').format('DD. MMM YYYY.'),
          today.add(3, 'days').format('DD. MMM YYYY.'),
        ])
        break
      case 5:
        setCalDays([
          today.subtract(4, 'days').format('DD. MMM YYYY.'),
          today.subtract(3, 'days').format('DD. MMM YYYY.'),
          today.subtract(2, 'days').format('DD. MMM YYYY.'),
          today.subtract(1, 'days').format('DD. MMM YYYY.'),
          todayDate,
          today.add(1, 'days').format('DD. MMM YYYY.'),
          today.add(2, 'days').format('DD. MMM YYYY.'),
        ])
        break
      case 6:
        setCalDays([
          today.subtract(5, 'days').format('DD. MMM YYYY.'),
          today.subtract(4, 'days').format('DD. MMM YYYY.'),
          today.subtract(3, 'days').format('DD. MMM YYYY.'),
          today.subtract(2, 'days').format('DD. MMM YYYY.'),
          today.subtract(1, 'days').format('DD. MMM YYYY.'),
          todayDate,
          today.add(1, 'days').format('DD. MMM YYYY.'),
        ])
        break
      case 0:
        setCalDays([
          today.subtract(6, 'days').format('DD. MMM YYYY.'),
          today.subtract(5, 'days').format('DD. MMM YYYY.'),
          today.subtract(4, 'days').format('DD. MMM YYYY.'),
          today.subtract(3, 'days').format('DD. MMM YYYY.'),
          today.subtract(2, 'days').format('DD. MMM YYYY.'),
          today.subtract(1, 'days').format('DD. MMM YYYY.'),
          todayDate,
        ])
        break
    }
  }, [])

  const handleLogout = () => {
    logout()
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <Container>
      <Header style={{ textAlign: 'center', padding: '2rem 0' }}>
        Dobrodosao {user?.firstName}
        <Button style={{ marginLeft: '2rem' }} onClick={handleLogout}>
          Logout
        </Button>
      </Header>

      <Message negative>
        <MessageHeader>
          {`* Raspored po danima se ucitava po sablonima prethodno kreiranim. `}
          <br />
          {`* Svaki edit direktno na ovom kalendaru je privremen za taj dan konkretno`}
        </MessageHeader>
      </Message>
      <Button>{`<`}</Button>
      <Button>Today</Button>
      <Button>{`>`}</Button>
      <Table celled fixed>
        <TableHeader>
          <TableRow>
            <TableHeaderCell style={todayDay === 1 && rawToday.format('DD. MMM YYYY.') === calDays[0] ? todayMark : {}}>
              Ponedeljak <br /> {`${calDays[0] || ''}`}
            </TableHeaderCell>
            <TableHeaderCell style={todayDay === 2 && rawToday.format('DD. MMM YYYY.') === calDays[1] ? todayMark : {}}>
              Utorak <br /> {`${calDays[1] || ''}`}
            </TableHeaderCell>
            <TableHeaderCell style={todayDay === 3 && rawToday.format('DD. MMM YYYY.') === calDays[2] ? todayMark : {}}>
              Sreda <br /> {`${calDays[2] || ''}`}
            </TableHeaderCell>
            <TableHeaderCell style={todayDay === 4 && rawToday.format('DD. MMM YYYY.') === calDays[3] ? todayMark : {}}>
              Cetvrtak <br /> {`${calDays[3] || ''}`}
            </TableHeaderCell>
            <TableHeaderCell style={todayDay === 5 && rawToday.format('DD. MMM YYYY.') === calDays[4] ? todayMark : {}}>
              Petak <br /> {`${calDays[4] || ''}`}
            </TableHeaderCell>
            <TableHeaderCell style={todayDay === 6 && rawToday.format('DD. MMM YYYY.') === calDays[5] ? todayMark : {}}>
              Subota <br /> {`${calDays[5] || ''}`}
            </TableHeaderCell>
            <TableHeaderCell style={todayDay === 0 && rawToday.format('DD. MMM YYYY.') === calDays[6] ? todayMark : {}}>
              Nedelja <br /> {`${calDays[6] || ''}`}
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
            <TableCell>Ukupno sati: {`0: 00`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve ponedeljke</Button>
            </TableCell>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve utorke</Button>
            </TableCell>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve srede</Button>
            </TableCell>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve cetvrtke</Button>
            </TableCell>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve petke</Button>
            </TableCell>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve subote</Button>
            </TableCell>
            <TableCell>
              <Button>Kreiraj/edituj sablon za sve nedelje</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[0]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[1]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[2]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[3]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[4]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[5]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  console.log(dayjs(calDays[6]))
                }}
                primary
              >
                submit-uj sve unose za konkretno ovaj datum
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  )
}

export default Home
