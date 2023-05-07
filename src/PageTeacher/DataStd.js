import React, { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as sarabun from '../assets/font/sarabun'

function DataStd(props) {

  const arrayClass = [1, 2, 3, 4, 5, 6]

  const dataStd = Object.values(props.users);

  const [Room, setRoom] = useState(1)
  const [Class, setClass] = useState(1)

  const handleSelectChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleSelectChangeClass = (event) => {
    setClass(event.target.value);
  };

  let dataStdlst = []
  for (let i = 0; i < dataStd.length; i++) {
    dataStdlst.push(dataStd[i])
  }

  let dataStdlstRoom = []
  for (let i = 0; i < dataStdlst.length; i++) {
    dataStdlstRoom.push(dataStdlst[i])
  }
  //Sort เลขที่
  const sortedDataStdlst = dataStdlst.sort((a, b) => a.STD_ORD - b.STD_ORD);

  //Sort ห้องเรียน
  const filterSTD = sortedDataStdlst.filter(dataStdlst => {
    return dataStdlst.STD_ROOM == Room && dataStdlst.STD_CLASS == Class;
  });

  const filteredRoomInt = dataStdlstRoom.filter(item => Number.isInteger(item.STD_ROOM)); //Array Int : 1 2 3 4 5 6
  const filteredRoomStr = dataStdlstRoom.filter(obj => typeof obj.STD_ROOM === 'string'); //Array String : EP IEP CP

  // Sort the filtered array by STD_ROOM
  filteredRoomInt.sort((a, b) => a.STD_ROOM - b.STD_ROOM);
  console.log(filteredRoomStr)

  const combinedArray = [...filteredRoomStr, ...filteredRoomInt];

  // Filter array to exclude elements with STD_ROOM equal to ""
  const array = combinedArray.filter(item => item.STD_ROOM !== "");
  console.log(array)

  //เก็บค่า เลขห้อง
  const uniqueValues = [...new Set(array.map(item => item.STD_ROOM))];

  //เก็บค่า ชั้น
  const customSort = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      if (!isNaN(a) && !isNaN(b)) {
        return Number(a) - Number(b);
      }
      return a.localeCompare(b);
    }

    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }

    if (typeof a === 'string') {
      return -1;
    }

    return 1;
  };

  const sorteduniqueValues = uniqueValues.sort(customSort); // EP , 1 , 2 , 3 , 4 , 5 , 6 .........
  console.log(sorteduniqueValues)

  function checkArray(arr) {
    if (arr.length === 0) {
      return "ยังไม่ได้ลงทะเบียน";
    } else {
      return arr[0].SUB_NAME;
    }
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

    let topicHeader = "รายชื่อนักเรียนชั้นมัธยมศึกษาปีที่ " + Class + "." + Room
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
    let headerTbNumber = "เลขที่";
    let headerTbID = "เลขประจำตัวนักเรียน";
    let headerTbName = "ชื่อ";
    let headerTbClass = "ชั้นมัธยมศึกษา";
    let headerTbChum = "วิชาชุมนุม";
    let headerTbFree = "วิชาเสรี";

    pdf.text(headerTbNumber, PaddingX + 5, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbID, PaddingX + 20, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbName, PaddingX + 50, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbClass, PaddingX + 90, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbChum, PaddingX + 120, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbFree, PaddingX + 160, cursorYStartLeft, { align: 'left' });

    //set optional cursor
    cursorYStartLeft += 2;
    cursorYStartRight += 2;

    pdf.line(PaddingX, cursorYStartLeft, PDF_WIDTH - PaddingX, cursorYStartRight);

    //reset cursor
    cursorYStartLeft += 5;
    cursorYStartRight += 5;

    pdf.setFont('Sarabun', 'normal');

    /* ตาราง */

    for (let i = 0; i < filterSTD.length; i++) {
      let STD_ORD = filterSTD[i].STD_ORD.toString();
      let ID = filterSTD[i].ID.toString();
      let FNAME = filterSTD[i].FNAME;
      let LNAME = filterSTD[i].LNAME;
      let STD_CLASS = filterSTD[i].STD_CLASS.toString();
      let STD_ROOM = filterSTD[i].STD_ROOM.toString();
      let CHUM = checkArray(filterSTD[i].CHUM);
      let FREE = checkArray(filterSTD[i].FREE);

      pdf.setFontSize(12);
      
      pdf.text(STD_ORD, PaddingX + 8, cursorYStartLeft, { align: 'left' });
      pdf.text(ID, PaddingX + 20, cursorYStartLeft, { align: 'left' });
      pdf.setFontSize(10);
      pdf.text(FNAME + " " + LNAME, PaddingX + 50, cursorYStartLeft, { align: 'left' });
      pdf.setFontSize(12);
      pdf.text("ม." + STD_CLASS + "." + STD_ROOM, PaddingX + 90, cursorYStartLeft, { align: 'left' });
      pdf.setFontSize(10);
      pdf.text(CHUM, PaddingX + 120, cursorYStartLeft, { align: 'left' });
      pdf.text(FREE, PaddingX + 160, cursorYStartLeft, { align: 'left' });

      cursorYStartLeft += LineHight;
      cursorYStartRight += LineHight;

      if (cursorYStartLeft >= PDF_HEIGHT - PaddingY) {
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
  };

  console.log(sortedDataStdlst)
  console.log(filterSTD)
  console.log(Room)

  return (
    <div >
      <div className="relative px-4 sm:px-8 rounded-lg justify-center top-28">
        <div className="py-8">
          <div>
            <label className="text-2xl font-semibold leading-tight">
              รายชื่อนักเรียน <br />
            </label>
            <label className="text-l font-semibold leading-tight mr-2">
              ชั้นมัธยมศึกษาปีที่ :
            </label>

            <select value={Class} onChange={handleSelectChangeClass}>
              <option >Select an Class</option>
              {arrayClass.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>

            <label className="text-l font-semibold leading-tight mr-2">
              ห้อง :
            </label>

            <select value={Room} onChange={handleSelectChangeRoom}>
              <option >Select an Room</option>
              {sorteduniqueValues.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>

          </div>



          <div className="py-4 ">
            <div id="table-to-print" className="m-5">
              <table className="rounded-lg shadow-md m-5">
                <thead >
                  <tr className="rounded-lg shadow-md">
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      เลขที่
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      เลขประจำตัวนักเรียน
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ชื่อ
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ชั้นมัธยมศึกษา
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ชุมนุม
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      เสรี
                    </th>
                  </tr>
                </thead>

                <tbody >
                  {filterSTD.map((student, index) => (
                    <tr key={index} className="w-max ">
                      <td className=" p-4 w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {student.STD_ORD}
                        </p>
                      </td>
                      <td className=" p-4 w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {student.ID}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {student.FNAME} {student.LNAME}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ม.{student.STD_CLASS}.{student.STD_ROOM}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {checkArray(student.CHUM)}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {checkArray(student.FREE)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mr-10 mt-3">
              <button onClick={DownloadPDF} className="bg-green-600 font-semibold text-white px-3 py-1 m-3 rounded-md shadow-md">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStd;