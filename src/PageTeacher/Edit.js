import React from "react";
import TableStd from "../components/TableStd";
import Card_Edit from "../components/Card_Edit";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { editStdGrade } from "../dataFetch";
import { useEffect } from "react";
import * as sarabun from '../assets/font/sarabun'


function Edit(props) {

  function onSubmitGrade() {
    editStdGrade({"cellidx":props.subjectselect.cell_idx,"std":props.subjectselect.STD})
    alert("แก้ไขเกรดนักเรียนเสร็จสิ้น")
  }

  function DownloadPDF() {
    const pdf = new jsPDF();

    pdf.addFileToVFS("Sarabun-Regular.ttf", sarabun.regular);
    pdf.addFileToVFS("Sarabun-Bold.ttf", sarabun.bold);

    pdf.addFont("Sarabun-Regular.ttf", "Sarabun", "normal");
    pdf.addFont("Sarabun-Bold.ttf", "Sarabun", "bold");

    const PDF_HEIGHT = +pdf.internal.pageSize.getHeight().toFixed(0); // 297 cm ?
    const PDF_WIDTH = +pdf.internal.pageSize.getWidth().toFixed(0); // 210 cm ?

    const PaddingX = 10;
    const PaddingY = 10;
    const LineHight = 7;

    let cursorYStartLeft = PaddingY;
    let cursorYStartRight = PaddingY;

    /* หัวกระดาษ */

    let topicHeader = "รายชื่อนักเรียนวิชา " + props.subjectselect.SUB_ID + " " + props.subjectselect.SUB_NAME;
    let School = "โรงเรียนเพชรพิทยาคม อำเภอเมือง จังหวัดเพชรบูรณ์"

    pdf.setFontSize(16);
    pdf.setFont('Sarabun', 'bold');

    pdf.text(topicHeader, PDF_WIDTH / 2, cursorYStartLeft, { align: 'center' });

    cursorYStartLeft += LineHight;
    cursorYStartRight += LineHight;

    pdf.text(School, PDF_WIDTH / 2, cursorYStartLeft, { align: 'center' });

    cursorYStartLeft += LineHight;
    cursorYStartRight += LineHight;

    pdf.line(PaddingX, cursorYStartLeft, PDF_WIDTH - PaddingX, cursorYStartRight);

    cursorYStartLeft += LineHight;
    cursorYStartRight += LineHight;

    /* หัวตาราง */
    pdf.setFontSize(14);
    let headerTbID = "เลขประจำตัวนักเรียน";
    let headerTbName = "ชื่อ";
    let headerTbClass = "ชั้นมัธยมศึกษา";
    let grade = "ผลการเรียน";

    pdf.text(headerTbID, PaddingX + 5, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbName, PaddingX + 50, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbClass, PaddingX + 130, cursorYStartLeft, { align: 'left' });
    pdf.text(grade, PaddingX + 160, cursorYStartLeft, { align: 'left' });
    
    //set optional cursor
    cursorYStartLeft += 2;
    cursorYStartRight += 2;

    pdf.line(PaddingX, cursorYStartLeft, PDF_WIDTH - PaddingX, cursorYStartRight);

    //reset cursor
    cursorYStartLeft += 5;
    cursorYStartRight += 5;

    pdf.setFont('Sarabun', 'normal');

    /* ตาราง */
    let std = props.subjectselect.STD;
    let stdLength = std.length;
    let stdPerPage = 20;
    let page = Math.ceil(stdLength / stdPerPage);

    let stdIndex = 0;
    let stdIndexStart = 0;
    let stdIndexEnd = 0;

    for (let i = 0; i < page; i++) {
      stdIndexStart = stdIndex;
      stdIndexEnd = stdIndex + stdPerPage;

      if (stdIndexEnd > stdLength) {
        stdIndexEnd = stdLength;
      }

      for (let j = stdIndexStart; j < stdIndexEnd; j++) {
        let stdID = std[j].ID.toString();
        let stdName = std[j].FNAME + " " + std[j].LNAME;
        let stdClass = "ม. " + std[j].CLASS.toString() + "." + std[j].ROOM.toString();
        let stdGrade = std[j].GRADE.toString();

        pdf.text(stdID, PaddingX + 5, cursorYStartLeft, { align: 'left' });
        pdf.text(stdName, PaddingX + 50, cursorYStartLeft, { align: 'left' });
        pdf.text(stdClass, PaddingX + 130, cursorYStartLeft, { align: 'left' });
        pdf.text(stdGrade, PaddingX + 160, cursorYStartLeft, { align: 'left' })

        cursorYStartLeft += LineHight;
        cursorYStartRight += LineHight;
      }

      stdIndex += stdPerPage;

      if (i < page - 1) {
        pdf.addPage();
        cursorYStartLeft = PaddingY;
        cursorYStartRight = PaddingY;
      }
    }
    
    const pdfDataUri = pdf.output('datauristring');

    const previewWindow = window.open();
    previewWindow?.document.write(
      `<iframe src="${pdfDataUri}" width="100%" height="100%"></iframe>`,
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      props.updatesubjectselect({... props.subjects[props.subjectselect.SUB_ID],cell_idx:props.subjectselect.cell_idx});
    }, 500);

    return () => clearInterval(interval);
  }, [props.subjectselect]);


  return (
    <div className="relative top-28 flex flex-col flex-wrap items-center">
      <div className="flex flex-wrap-reverse laptop:flex-nowrap laptop:flex-row laptop:items-center">
        <div className="m-4 mt-5 w-screen laptop:w-max">
          <TableStd subjectselect={props.subjectselect}
            updatesubjectselect={props.updatesubjectselect} />
        </div>
        <div className="mt-5 w-screen laptop:w-max">
          <Card_Edit subjectselect={props.subjectselect} updateTablePage={props.updateTablePage}
            TablePage={props.TablePage} />
        </div>
      </div>
      <div className="flex flex-row-reverse">
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