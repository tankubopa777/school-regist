import { redirect, useNavigate, useHistory } from 'react-router-dom';
import { checkLogin , fetchSubjects} from '../dataFetch.js'
import Logo from '../assets/pks.png';
import Loading from "../components/loading.js";
import { useState, useEffect ,useRef  } from 'react'

export const Login_page = (props) => {
  
  const navigate = useNavigate();
  const [altState,setAltState] = useState("hidden")
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (event.target === usernameRef.current) {
        passwordRef.current.focus();
      } else if (event.target === passwordRef.current) {
        Login()
      }
    }
  }

  const Login = async (e) => {
    e.preventDefault();
    let username = e.target.form.username.value;
    let passw = e.target.form.password.value;
    let alt = e.target.form.alert;

    const success = await checkLogin(username, passw);
    
    if (success[0]) {
      props.updateIsLoggedIn(true);
      props.updateUser(success[1]);
    }
    else{
      setAltState("block");
    }

    if (props.isLoggedIn) {
      e.target.form.username.value = "";
      e.target.form.password.value = "";
      if (props.user.TYPE === 'STD') {
        navigate("/วิชาเสรี");
      }
      if (props.user.TYPE === 'PROF') {
        navigate("/Teacher");
      }
    }
  }

  if(props.users == null && props.subjects == null){
    return(<Loading/>);
  }
  else{
    return (
      <div>
        {/* Under Tabblet Login Page */}
        <div className="fixed flex tablet:hidden justify-center top-0 left-0 z-50 w-full h-10 shadow-2xl bg-green-600 ">
          <div className="relative flex flex-col top-20">
            <div className="">
            <img className="w-64" src={Logo} />
              <p className="text-center font-bold text-xl">Welcome <br /> Petpittayakom School</p>
            </div>
            <div className="flex m-auto">
              <form className='login'>
  
                <div className="m-3">
                  <input type="text" className="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Student ID" id='username' required />
                </div>
  
                <div className="m-3">
                  <input type="password" className="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Password" id='password' required />
                </div>
  
                <div className="m-3">
                  <div className="custom-control custom-checkbox">
  
                  </div>
                </div>
  
                <div className="flex flex-row justify-center">
                  <button onClick={Login} className="btn bg-green-400 px-8 py-1 rounded-lg text-white hover:bg-green-600 action:red-1000" >Enter</button>
                </div>
              </form>

              <label className={"flex flex-row justify-center text-red-600 " + altState} id="alert">Incorrect username or password.</label>
            </div>
          </div>
        </div>
  
        {/* Over Tablet size Login Page */}
        <div className="hidden tablet:block">
          <div className="absolute flex flex-row-reverse justify-between w-[700px] h-[400px] border-solid bg-gray-300 border-l-gray-300 rounded-[50px] shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="relative top-28 right-28">
              <form className='login'>
                <p className="flex flex-row justify-center text-2xl font-bold">Login</p>
                <div className="m-3">
                  <input type="text" className="form-control bg-slate-200 rounded-md w-max p-2" placeholder="Student ID" id='username' ref={usernameRef} onKeyPress={handleKeyPress} required />
                </div>
  
                <div className="m-3">
                  <input type="password" className="form-control bg-slate-200 rounded-md w-max p-2" placeholder="password" id='password' ref={passwordRef} onKeyPress={handleKeyPress} required />
                </div>
  
                <div className="m-3">
                  <div className="custom-control custom-checkbox">
  
                  </div>
                </div>
  
                <div className="flex flex-row justify-center">
                  <button onClick={Login} className="btn bg-green-400 px-8 py-1 rounded-lg text-white hover:bg-green-600" >Enter</button>
                </div>
              </form>

              <label className={"text-red-600 " + altState} id="alert">Incorrect username or password.</label>
            </div>
            <div className="w-1/2 height-full bg-green-600 border-r-[50px] border-r-gray-300 border-t-[400px] border-t-transparent rounded-l-[50px]">
              <img src={Logo} className="w-56 -translate-y-80 translate-x-12"/>
            </div>
          </div>
  
        </div>
      </div>
  
  
    );
  }
  
  
}

export default Login_page;