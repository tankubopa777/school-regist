import NavbarAJ from "../components/NavbarAJ";
import Table from "../components/Table";
import Register_subject from "../components/RegSubject";
import Card_Edit from "../components/Card_Edit";
import TableStd from "../components/TableStd";
import Grade from "../components/Grade";
import EditComponents from "../components/EditComponents";

function Ajarn_Page(props) {
  return (
    <div>
      <div class="block tablet:hidden">
        <p class="text-5xl">USE ON PC ONLY</p>
      </div>
    <div class="hidden tablet:block">
      <NavbarAJ />
    </div>
      {/* <Table />  */}
      {/* <EditComponents /> */}
      {/*   */}

      {/* <EditComponents /> */}
      


    </div>
  );
}
export default Ajarn_Page;