import React from 'react';
import { Link } from 'react-router-dom';
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
}

  const DataStdClick = () => { 
    props.updateTablePage('Data_student');
}

  return (
    <nav className=" border-gray-200 bg-green-600 p-3">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <div className="flex items-center">
          
          <div>
            <img src="pks.png" className="h-12 mr-3 sm:h-9" alt="Petpittayakom Logo" />
          </div>
          <div onClick={() => MainClick()} className="text-sm font-bold text-white hover:underline px-2" to="/Teacher">หน้าหลัก</div>
          <div onClick={() => DataStdClick()} className="text-sm font-bold text-white hover:underline px-2" to="/DataStd">รายชื่อนักเรียน</div>
        </div>


        <div className="flex items-center">
          <div className="mr-6 text-sm font-medium text-gray-500 dark:text-white ">Prof.Pao</div>
          <button onClick={logout} className="hover:text-white hover:font-bold cursor-pointer text-white">
                  Log out
                </button>
        </div>
      </div>
    </nav>
  );
}
export default NavbarAJ;