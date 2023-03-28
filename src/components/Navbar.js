import Logo from '../assets/pks.png';
import { redirect, useNavigate, useHistory } from 'react-router-dom';

function navToggle() {
  document.getElementById('mobile-nav').classList.toggle('hidden');
  document.getElementById('btn-on').classList.toggle('hidden');
  document.getElementById('btn').classList.toggle('hidden');
}

function Navbar_component(props) {
  const navigate = useNavigate();

  const logout =  ()  => {
    props.updateIsLoggedIn(false)
    props.updateUser(null)
    navigate("/")
  }


  return (

    <nav>
      <div className="fixed top-0 left-0 z-50 w-full shadow-xl">
        <div className="flex justify-between bg-green-500">

          <div className="flex">
            <div>
              <img src={Logo} className="w-20" />
            </div>
            <div className="flex flex-col justify-center m-3">
              <p className="">โรงเรียนเพชรพิทยาคม</p>
            </div>

            <div className="hidden tablet:flex flex-row justify-center ">
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  วิชาเสรี
                </a>
              </div>
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  วิชาชุมนุม
                </a>
              </div>
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  วิชาที่ลงทะเบียนเเล้ว
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center m-3">
            <div className="hidden tablet:flex flex-row justify-center">
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  icon
                </a>
              </div>
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  SIGNED IN AS {props.user.FNAME} {props.user.LNAME}
                </a>
              </div>
              <div className="flex flex-col justify-center m-3">
                <button onClick={logout}>
                  Log out
                </button>
              </div>
            </div>
            <div>
              <div className="flex tablet:hidden">
                <button id="btn" onClick={navToggle} className="hidden flex-row justify-center m-3">
                <div className="fixed">
                    <div className="h-4 w-4 border-r-4 ml-1 -rotate-45" />
                  </div>
                  <div className="relative">
                    <div className="h-4 w-4 border-r-4 ml-1 rotate-45 " />
                  </div>
                </button>
                <button id="btn-on" onClick={navToggle} className="flex flex-row justify-center m-3">
                  <div className="rotate-90">
                    <span className="h-4 w-4 border-r-4 ml-1" />
                    <span className="h-4 w-4 border-r-4 ml-1" />
                    <span className="h-4 w-4 border-r-4 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-green-500">
          <div id="mobile-nav" className="hidden flex-col justify-center m-3 tablet:hidden">
            <div className="flex flex-row justify-center ">
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  วิชาเสรี
                </a>
              </div>
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  วิชาชุมนุม
                </a>
              </div>
              <div className="flex flex-col justify-center m-3">
                <a href="#responsive-header" className="">
                  วิชาที่ลงทะเบียนเเล้ว
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar_component;