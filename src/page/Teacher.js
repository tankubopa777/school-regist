import React from "react";
import NavbarAJ from "../components/NavbarAJ";
import Table from "../components/Table";
import RegSubject from "../components/RegSubject";
import Grade from "../components/Grade";
import EditComponents from "../components/EditComponents";
import { useState, useEffect } from 'react'
import Edit from "../PageTeacher/Edit";

// List ที่ต้องทำ
// ทำปุ่มเพิ่มวิชา <Table />
// Link Navbar ไปหน้าเเรก
// Link Navbar ไปหน้ารายชื่อนักเรียน
// Link Navbar log out
// ตกเเต่งหน้าเว็บ


function Teacher_page(props) {
  const [TablePage, setTablePage] = useState('Table');

  console.log(props.subjects);
  const [subjectselect, setSubjectselect] = useState();

  const updatesubjectselect = (newValue) => {
    setSubjectselect(newValue);
  };

  const updateTablePage = (newValue) => {
    setTablePage(newValue);
  };

  if (TablePage === 'Table') {
    return (
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
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
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
        <Edit subjectselect={subjectselect} 
              updateTablePage={updateTablePage} 
              TablePage={TablePage}  />
      </div>
    );
  }
  else if (TablePage === 'Register_subject') {
    return (
      <div>
        <NavbarAJ
          user={props.user} updateUser={props.updateUser}
          isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
        <RegSubject subjectselect={subjectselect}  
                    updateTablePage={updateTablePage} 
                    TablePage={TablePage} />
      </div>
    );
  }


}
export default Teacher_page;