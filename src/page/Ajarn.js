import NavbarAJ from "../components/NavbarAJ";
import Table from "../components/Table";
import Register_subject from "../components/RegSubject";
import Card_Edit from "../components/Card_Edit";
import TableStd from "../components/TableStd";

function Ajarn_Page() {
  return (
    <div>
      <NavbarAJ />


      {/* edit_page */}
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


    </div>
  );
}
export default Ajarn_Page;