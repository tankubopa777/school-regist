import React from "react";
import NavbarAJ from "../components/NavbarAJ";
import Table from "../components/Table";
import Register_subject from "../components/RegSubject";
import Card_Edit from "../components/Card_Edit";
import TableStd from "../components/TableStd";
import Grade from "../components/Grade";
import EditComponents from "../components/EditComponents";
import { useState, useEffect } from 'react'

function Teacher_page(props) {

  return (
    <div>
      <NavbarAJ
        user={props.user} updateUser={props.updateUser}
        isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
        <Table subjects={props.subjects} />
    </div>
  );
}
export default Teacher_page;