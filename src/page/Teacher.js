import React from "react";
import NavbarAJ from "../components/NavbarAJ";
import Table from "../components/Table";
import Register_subject from "../components/RegSubject";
import Card_Edit from "../components/Card_Edit";
import TableStd from "../components/TableStd";
import Grade from "../components/Grade";
import EditComponents from "../components/EditComponents";
import { useState, useEffect } from 'react'
import Edit from "../PageTeacher/Edit";

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
        <Edit subjectselect={subjectselect}  />
      </div>
    );
  }


}
export default Teacher_page;