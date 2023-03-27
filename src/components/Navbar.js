import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { redirect, useNavigate, useHistory } from 'react-router-dom';

function Navbar_component(props) {
  const navigate = useNavigate();

  const logout =  ()  => {
    props.updateIsLoggedIn(false)
    props.updateUser(null)
    navigate("/")
  }

  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="/Home">Petpittayakom School</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <button onClick={logout}>{props.user.FNAME} {props.user.LNAME}</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_component;