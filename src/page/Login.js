import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { redirect, useNavigate, useHistory } from 'react-router-dom';
import { checkLogin , fetchSubjects} from '../dataFetch.js'
import { useState, useEffect } from 'react'
import Logo from '../assets/pks.png';

// export const username = document.getElementById('username');

export const Login_page = (props) => {
  
  fetchSubjects()
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    let username = e.target.form.username.value;
    let passw = e.target.form.password.value;

    const success = await checkLogin(username, passw);

    if (success[0]) {
      props.updateIsLoggedIn(true);
      props.updateUser(success[1]);
    }
  }

  if (props.isLoggedIn) {
    if (props.user.TYPE === 'STD') {
      navigate("/วิชาเสรี");
    }
    if (props.user.TYPE === 'PROF') {
      navigate("/Teacher");
    }
  }

  return (
    <div>
      {/* Under Tabblet Login Page */}
      <div class="fixed flex tablet:hidden justify-center top-0 left-0 z-50 w-full h-10 shadow-2xl bg-green-600">
        <div class="relative flex flex-col top-20">
          <div class="">
          <img src={Logo} class=""/>
            <p class="text-center font-bold text-xl">Welcome <br /> Petpittayakom School</p>
          </div>
          <div class="flex">
            <form className='login'>

              <div className="m-3">
                <input type="text" class="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Student ID" id='username' required />
              </div>

              <div className="m-3">
                <input type="password" class="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Password" id='password' required />
              </div>

              <div className="m-3">
                <div className="custom-control custom-checkbox">

                </div>
              </div>

              <div className="flex flex-row justify-center">
                <button onClick={Login} class="btn bg-green-400 px-8 py-1 rounded-lg text-white hover:bg-green-600" >Enter</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Over Tablet size Login Page */}
      <div class="hidden tablet:block">
        <div class="absolute flex flex-row-reverse justify-between w-[700px] h-[400px] border-solid bg-gray-300 border-l-gray-300 rounded-[50px] shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div class="relative top-28 right-20">
            <form className='login'>
              <p class="flex flex-row justify-center text-2xl font-bold">Login</p>
              <div className="m-3">
                <input type="text" class="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Student ID" id='username' required />
              </div>

              <div className="m-3">
                <input type="password" class="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Password" id='password' required />
              </div>

              <div className="m-3">
                <div className="custom-control custom-checkbox">

                </div>
              </div>

              <div className="flex flex-row justify-center">
                <button onClick={Login} class="btn bg-green-400 px-8 py-1 rounded-lg text-white hover:bg-green-600" >Enter</button>
              </div>
            </form>
          </div>
          <div class="w-1/2 height-full bg-green-600 border-r-[50px] border-r-gray-300 border-t-[400px] border-t-transparent rounded-l-[50px]">
            <img src={Logo} class="absolute top-1/4 left-1/3 -translate-x-44 -translate-y-1"/>
          </div>
        </div>

      </div>
    </div>


  );
}

export default Login_page;