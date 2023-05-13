import React from "react";
import NavbarAJ from "../components/NavbarAJ";
import Table from "../components/Table";
import RegSubject from "../components/RegSubject";
import { useState, useEffect } from 'react'
import Edit from "../PageTeacher/Edit";
import DataStd from "../PageTeacher/DataStd";
import Block_DetailStd from "../components/ResetPassword";


// List ที่ต้องทำ
// ทำปุ่มเพิ่มวิชา <Table />
// filter วิชาที่เปิด <DataStd />
// Link Navbar log out
// ตกเเต่งหน้าเว็บ


function Teacher_page(props) {
  const [TablePage, setTablePage] = useState('Table');
  const [subjectselect, setSubjectselect] = useState();
  const [Status, setStatus] = useState();

  const updatesubjectselect = (newValue) => {
    setSubjectselect(newValue);
  };

  const updateTablePage = (newValue) => {
    setTablePage(newValue);
  };
  const updateStatus = (newValue) => {
    setStatus(newValue);
  };

  if (TablePage === 'Table') {
    return (
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn}
          updateTablePage={updateTablePage}
          TablePage={TablePage} />
        <Table updateTablePage={updateTablePage}
          TablePage={TablePage}
          updatesubjectselect={updatesubjectselect}
          subjectselect={subjectselect}
          subjects={props.subjects} />
      </div>
    );
  }
  else if (TablePage === 'Edit') {
    return (
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn}
          updateTablePage={updateTablePage}
          TablePage={TablePage} />

        <Edit subjectselect={subjectselect}
          updatesubjectselect={updatesubjectselect}
          updateTablePage={updateTablePage}
          subjects={props.subjects}
          TablePage={TablePage}
          updateStatus={updateStatus}
          Status={Status}
        />
      </div>
    );
  }
  else if (TablePage === 'Register_subject') {
    return (
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn}
          updateTablePage={updateTablePage}
          TablePage={TablePage} />

        <RegSubject users={props.users}
          updateusers={props.updateusers}
          subjectselect={subjectselect}
          updateTablePage={updateTablePage}
          TablePage={TablePage}
          subjects={props.subjects} />
      </div>
    );
  }

  else if (TablePage === 'Data_student') {
    return (
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn}
          updateTablePage={updateTablePage}
          TablePage={TablePage} />

        <DataStd users={props.users}
          updateusers={props.updateusers}
          subjectselect={subjectselect}
          updateTablePage={updateTablePage}
          TablePage={TablePage} 
          subjects={props.subjects}/>
      </div>
    );
  }
  else if (TablePage === 'ResetPassword') {
    return (
      
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn}
          updateTablePage={updateTablePage}
          TablePage={TablePage} />

        <div>
        <Block_DetailStd
                         user={props.user}
                         subjectselect={subjectselect}
                         updatesubjectselect={updatesubjectselect}
                         updateTablePage={updateTablePage}
                         subjects={props.subjects}
                         TablePage={TablePage}
                         updateStatus={updateStatus}
                         Status={Status}
        /></div>
        
      </div>
    );
  }



}
export default Teacher_page;