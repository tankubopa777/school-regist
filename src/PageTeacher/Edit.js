import React from "react";
import TableStd from "../components/TableStd";
import Card_Edit from "../components/Card_Edit";
import NavbarAJ from "../components/NavbarAJ";

function Edit(props){
    
    return(
        <div>
        <div className="grid grid-cols-4">
          <div className="m-4 col-span-3">
            <TableStd subjectselect={props.subjectselect}/>
          </div>
          <div className="m-4 mt-5 col-span-1">
            <Card_Edit subjectselect={props.subjectselect}/>
          </div>
        </div>
        <div className="block float-right mx-5">
          <button className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700">
            Export
          </button>

          <button className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700 ">
            Submit
          </button>
        </div>  
      </div>
    );
}
export default Edit;