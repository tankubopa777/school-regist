import React from "react";
import TableStd from "../components/TableStd";
import Card_Edit from "../components/Card_Edit";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { editStdGrade } from "../dataFetch";
import { useEffect } from "react";


function Edit(props) {

  function onSubmitGrade() {
    editStdGrade({"cellidx":props.subjectselect.cell_idx,"std":props.subjectselect.STD})
    alert("แก้ไขเกรดนักเรียนเสร็จสิ้น")
  }

  function DownloadPDF() {
    const input = document.getElementById('table-to-print');
    html2canvas(input)
      .then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // mm
        const pageHeight = 297; // mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('table.pdf');
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      props.updatesubjectselect({... props.subjects[props.subjectselect.SUB_ID],cell_idx:props.subjectselect.cell_idx});
    }, 500);

    return () => clearInterval(interval);
  }, [props.subjectselect]);


  return (
    <div className="relative top-28">
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
        <button onClick={DownloadPDF} className="bg-green-600 rounded-md px-2 py-1 mx-5 my-3 text-slate-50 hover:bg-lime-700">
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