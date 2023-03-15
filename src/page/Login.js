import { Container } from "react-bootstrap";
import Home_page from "./Home";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Login_page() {
    return (
        <div>
          <Container className=" bg-secondary position-absolute top-50 start-50 translate-middle">
            <Row>
              <Col> </Col>
              <Col> 
              <Container>
            <form>
                <h3>Sign In</h3>
            <div className="mb-3">
          <label>ID Student</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control" 
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </Container>              
              </Col>
            </Row>
            
      </Container>
        </div>
    );
  }
export default Login_page;