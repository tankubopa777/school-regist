import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { hookUser } from '../dataFetch.js'
import { useState , setState} from "react";

const callUser = async () => {
  let data = await hookUser()
  return data;
}

function checkLogin(e){
  e.preventDefault();
  let username = e.target.form.username.value;
  let passw = e.target.form.password.value;
  callUser().then((response) => {
    if(!(username in response) || response[username].PASSW != passw){
      console.log("failed");
    }
    else{
      console.log("pass");
    }
    
  });
}

export default function Login_page() {

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
                <input type="text" className="form-control" placeholder="Student ID" id='username' required/>
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" id='password' required/>
              </div>

              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    
                </div>
              </div>
                
              <div className="d-grid">
                <button onClick={checkLogin} className="btn btn-primary" >Submit</button>
              </div>
          </form>
      </Container>              
              </Col>
            </Row>
            
      </Container>
        </div>
    );
  }