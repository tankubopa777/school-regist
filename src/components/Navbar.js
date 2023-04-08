import Logo from '../assets/pks.png';
import Profile from '../assets/profile.png';
import { redirect, useNavigate, useHistory } from 'react-router-dom';

function navToggle() {
  document.getElementById('mobile-nav').classList.toggle('hidden');
  document.getElementById('btn-on').classList.toggle('hidden');
  document.getElementById('btn').classList.toggle('hidden');
}

function Navbar_component(props) {
  const navigate = useNavigate();

  const logout = () => {
    props.updateIsLoggedIn(false)
    props.updateUser(null)
    navigate("/")
  }

  const std1 = () => {
    navigate("/วิชาเสรี")
  }

  const std2 = () => {
    navigate("/วิชาชุมนุม")
  }

  const std3 = () => {
    navigate("/วิชาที่ลงทะเบียนเเล้ว")
  }

  const resetPasswd = () => {
    navigate("/แก้ไขรหัส")
  }


  return (

    <nav id="nav">
      <div className="fixed top-0 left-0 z-50 w-full shadow-2xl text-white">
        <div className="flex justify-between bg-green-600">

          <div className="flex">
            <div>
              <img src={Logo} className="w-20" />
            </div>
            <div className="hidden tablet:flex flex-col justify-center m-3">
              <p className="">โรงเรียนเพชรพิทยาคม</p>
            </div>

            <div className="flex tablet:hidden flex-col justify-center m-3">
              <p className="">{props.user.ID} <br /> {props.user.FNAME}</p>
            </div>

            <div className="hidden tablet:flex flex-row justify-center ">
              <div className="flex flex-col justify-center m-1">
                <a onClick={std1} className="hover:underline cursor-pointer">
                  วิชาเสรี
                </a>
              </div>
              <div className="flex flex-col justify-center m-1">
                <a onClick={std2} className="hover:underline cursor-pointer">
                  วิชาชุมนุม
                </a>
              </div>
              <div className="flex flex-col justify-center m-1">
                <a onClick={std3} className="hover:underline cursor-pointer">
                  วิชาที่ลงทะเบียนเเล้ว
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center m-1">
            <div className="hidden tablet:flex flex-row justify-center">
              <div className="flex flex-row justify-center items-center m-1">
                <p className="">
                  {props.user.ID} {props.user.FNAME}
                </p>
                <div className="relative">
                  <div className="w-10 relative ml-2 hover:opacity-50 cursor-pointer" onClick={resetPasswd}>
                    <img src={Profile} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center m-1">
                <button className="hover:text-white hover:underline" onClick={logout}>
                  <p className='text-xs'>ออกจากระบบ</p>
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

        <div className="flex justify-center bg-green-600">
          <div id="mobile-nav" className="hidden flex-col justify-center m-3 tablet:hidden">
            <div className="flex flex-col justify-center ">
              <div className="flex flex-row justify-center m-3">
                <a onClick={std1} className="hover:text-white hover:font-bold cursor-pointer">
                  วิชาเสรี
                </a>
              </div>
              <div className="flex flex-row justify-center m-3">
                <a onClick={std2} className="hover:text-white hover:font-bold cursor-pointer">
                  วิชาชุมนุม
                </a>
              </div>
              <div className="flex flex-row justify-center m-3">
                <a onClick={std3} className="hover:text-white hover:font-bold cursor-pointer">
                  วิชาที่ลงทะเบียนเเล้ว
                </a>
              </div>
              <div className="flex flex-row justify-center m-3">
                <a onClick={resetPasswd} className="hover:text-white hover:font-bold cursor-pointer">
                  แก้ไขรหัสผ่าน
                </a>
              </div>
              <div className="flex flex-row justify-center m-3">
                <button onClick={logout} className="hover:text-white hover:font-bold cursor-pointer">
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar_component;