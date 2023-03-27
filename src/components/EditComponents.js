import React from "react";
import TableStd from "./TableStd";
import Card_Edit from "./Card_Edit";

function EditComponents(){
    return(
        <div>
        <div className="grid grid-cols-4">
          <div className="m-4 col-span-3">
            <TableStd />
          </div>
          <div className="m-4 mt-5 col-span-1">
            <Card_Edit />
          </div>
        </div>
        <div className="block float-right mx-5">
          <button className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700">
            export
          </button>

          <button className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700 ">
            Submit
          </button>
        </div>  
      </div>
    );
}
export default EditComponents;
