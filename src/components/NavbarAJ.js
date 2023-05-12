import React from 'react';
import Profile from '../assets/profile.png';
import { redirect, useNavigate, useHistory } from 'react-router-dom';

function NavbarAJ(props) {
  const navigate = useNavigate();

  const logout = () => {
    props.updateIsLoggedIn(false)
    props.updateUser(null)
    navigate("/")
  }

  const MainClick = () => {
    props.updateTablePage('Table');
    navToggle();
  }

  const DataStdClick = () => {
    props.updateTablePage('Data_student');
    navToggle();
  }

  const resetPasswd = () => {
    props.updateTablePage('ResetPassword');
    navToggle();
  }


  function navToggle() {
    document.getElementById('mobile-nav').classList.toggle('hidden');
    document.getElementById('btn-on').classList.toggle('hidden');
    document.getElementById('btn').classList.toggle('hidden');
  }

  return (
    <nav id="nav">
      <div className="fixed top-0 left-0 z-50 w-full shadow-2xl text-white">
        <div className="flex justify-between bg-green-600">

          <div className="flex">
            <div>
              <img src="pks.png" className="w-20" />
            </div>
            <div className="hidden tablet:flex flex-col justify-center m-3">
              <p className="">โรงเรียนเพชรพิทยาคม</p>
            </div>

            <div className="flex tablet:hidden flex-col justify-center m-3">
              <p className="">{props.user.ID} <br /> {props.user.FNAME}</p>
            </div>

            <div className="hidden tablet:flex flex-row justify-center ">
              <div className="flex flex-col justify-center m-1">
                <a onClick={() => MainClick()} className="hover:underline cursor-pointer">
                  หน้าหลัก
                </a>
              </div>
              <div className="flex flex-col justify-center m-1">
                <a onClick={() => DataStdClick()} className="hover:underline cursor-pointer">
                  รายชื่อนักเรียน
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center m-1">
            <div className="hidden tablet:flex flex-row justify-center">
              <div className="flex flex-row justify-center items-center m-1">
                <p className="">
                  Prof.{props.user.FNAME}
                </p>
              </div>
              <div className="relative">
                <div className="w-10 relative ml-2 hover:opacity-50 cursor-pointer" onClick={() => resetPasswd()}>
                  <img src={Profile} className="" />
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
                <a onClick={() => MainClick()} className="hover:text-white hover:font-bold cursor-pointer">
                  หน้าหลัก
                </a>
              </div>
              <div className="flex flex-row justify-center m-3">
                <a onClick={() => DataStdClick()} className="hover:text-white hover:font-bold cursor-pointer">
                  รายชื่อนักเรียน
                </a>
              </div>

              <div className="flex flex-row justify-center m-3">
                <a onClick={() => resetPasswd()} className="hover:text-white hover:font-bold cursor-pointer">
                  เปลี่ยนรหัสผ่าน
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
export default NavbarAJ;