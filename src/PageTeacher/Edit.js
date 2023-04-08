import React from "react";
import TableStd from "../components/TableStd";
import Card_Edit from "../components/Card_Edit";
import NavbarAJ from "../components/NavbarAJ";
import { editStdGrade } from "../dataFetch";

function Edit(props) {

  function onSubmitGrade() {
    editStdGrade({"cellidx":props.subjectselect.cell_idx,"std":props.subjectselect.STD})
    alert("แก้ไขเกรดนักเรียนเสร็จสิ้น")
  }

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="m-4 col-span-3">
          <TableStd subjectselect={props.subjectselect}
            updatesubjectselect={props.updatesubjectselect} />
        </div>
        <div className="m-4 mt-5 col-span-1">
          <Card_Edit subjectselect={props.subjectselect} updateTablePage={props.updateTablePage}
            TablePage={props.TablePage} />
        </div>
      </div>
      <div className="block float-right mx-5">
        <button className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700">
          Export
        </button>

        <button onClick={onSubmitGrade} className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700 ">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Edit;