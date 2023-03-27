import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { redirect, useNavigate, useHistory } from 'react-router-dom';
import { checkLogin } from '../dataFetch.js'
import { useState, useEffect } from 'react'

// export const username = document.getElementById('username');

export const Login_page = (props) => {

  const navigate = useNavigate();

  const Login = async (e)  => {
    e.preventDefault();
    let username = e.target.form.username.value;
    let passw = e.target.form.password.value;
    
    const success = await checkLogin(username,passw);

    if(success[0]){
      props.updateIsLoggedIn(true);
      props.updateUser(success[1]);
    } 
  }

  if (props.isLoggedIn) {
    navigate("/Home");
    
  }

  return (
    <div>
      <Container className=" bg-secondary position-absolute top-50 start-50 translate-middle">
        <Row>
          <Col> </Col>
          <Col>
            <Container>
              <form className='login'>
                <h3>Sign In</h3>

                <div className="mb-3">
                  <label>ID Student</label>
                  <input type="text" className="form-control" placeholder="Student ID" id='username' required />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Password" id='password' required />
                </div>

                <div className="mb-3">
                  <div className="custom-control custom-checkbox">

                  </div>
                </div>

                <div className="d-grid">
                  <button onClick={Login} className="btn btn-primary" >Submit</button>
                </div>
              </form>
            </Container>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Login_page;