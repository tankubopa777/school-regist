import React, { useEffect, useState } from "react";
import jsPDF from 'jspdf';
import * as sarabun from '../assets/font/sarabun'

function DataStd(props) {

  //Key ชั้นมัธยมศึกษา Value ห้องเรียน
  const arrayRoom = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  }

  const dataStd = Object.values(props.users);
  const subject = Object.values(props.subjects);

  const grade = Object.values(props.subjects);
  console.log(grade)

  const [Room, setRoom] = useState(1)
  const [Class, setClass] = useState(1)

  const handleSelectChangeRoom = (event) => {
    setRoom(event.target.value);
  };
  const handleSelectChangeClass = (event) => {
    setClass(event.target.value);
    setRoom(1)
  };

  let dataStdlst = []
  for (let i = 0; i < dataStd.length; i++) {
    dataStdlst.push(dataStd[i])
  }

  //Sort เลขที่
  const sortedDataStdlst = dataStdlst.sort((a, b) => a.STD_ORD - b.STD_ORD);

  //Sort ห้องเรียน
  const filterSTD = sortedDataStdlst.filter(dataStdlst => {
    return dataStdlst.STD_ROOM == Room && dataStdlst.STD_CLASS == Class;
  });

  //เก็บค่า เลขห้อง ถ้าซ้ำจะไม่เก็บ และเรียงจากน้อยไปมาก
  dataStdlst.forEach(item => {
    const { STD_CLASS, STD_ROOM } = item;
    if (arrayRoom.hasOwnProperty(STD_CLASS)) {
      arrayRoom[STD_CLASS].push(STD_ROOM);
    }
    arrayRoom[STD_CLASS] = [...new Set(arrayRoom[STD_CLASS])];

    for (const key in arrayRoom) {
      arrayRoom[key].sort((a, b) => {
        if (!isNaN(a) && !isNaN(b)) {
          return Number(a) - Number(b);
        } else if (!isNaN(a)) {
          return -1;
        } else if (!isNaN(b)) {
          return 1;
        } else {
          return a.localeCompare(b);
        }
      });
    }
  });

  console.log(filterSTD)
  console.log(subject)
  console.log(filterSTD.length)

  const dictGradeFree = {};
  const dictGradeChum = {};

  for (let i = 0; i < filterSTD.length; i++) {
    let ID = filterSTD[i].ID.toString();
    console.log(ID)

    let CHUM_GRADE = "";
    if (filterSTD[i].CHUM.length === 0) {
      CHUM_GRADE = " - ";
    } else {
      CHUM_GRADE = (subject.filter(subjectlst => subjectlst.SUB_ID === filterSTD[i].CHUM[0].SUB_ID))[0].STD[0].GRADE.toString()
      console.log(typeof CHUM_GRADE)
    }

    let FREE_GRADE = "";
    if (filterSTD[i].FREE.length === 0) {
      FREE_GRADE = " - ";
    } else {
      FREE_GRADE = (subject.filter(subjectlst => subjectlst.SUB_ID === filterSTD[i].FREE[0].SUB_ID))[0].STD[0].GRADE.toString()
      console.log(typeof FREE_GRADE)
    }

    dictGradeFree[ID] = FREE_GRADE;
    dictGradeChum[ID] = CHUM_GRADE;
  }
  console.log(dictGradeFree)
  console.log(dictGradeChum)


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
    let headerTbID = "เลขประจำตัว\nนักเรียน";
    let headerTbName = "ชื่อ";
    let headerTbClass = "ชั้นมัธยม\nศึกษาปีที่";
    let headerTbChum = "วิชาชุมนุม";
    let HeaderGradeChum = "ผลการเรียน";
    let headerTbFree = "วิชาเสรี";
    let HeaderGradeFree = "ผลการเรียน";

    pdf.text(headerTbNumber, PaddingX + 5, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbID, PaddingX + 25, cursorYStartLeft, { align: 'center' });
    pdf.text(headerTbName, PaddingX + 40, cursorYStartLeft, { align: 'left' });
    pdf.text(headerTbClass, PaddingX + 85, cursorYStartLeft, { align: 'center' });
    pdf.text(headerTbChum, PaddingX + 95, cursorYStartLeft, { align: 'left' });
    pdf.text(HeaderGradeChum, PaddingX + 125, cursorYStartLeft, { align: 'center' });
    pdf.text(headerTbFree, PaddingX + 140, cursorYStartLeft, { align: 'left' });
    pdf.text(HeaderGradeFree, PaddingX + 170, cursorYStartLeft, { align: 'center' });

    //set optional cursor
    cursorYStartLeft += LineHight + 2;
    cursorYStartRight += LineHight + 2;

    pdf.line(PaddingX, cursorYStartLeft, PDF_WIDTH - PaddingX, cursorYStartRight);

    cursorYStartLeft += LineHight;
    cursorYStartRight += LineHight;

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

      let CHUM_GRADE = ""
      if (filterSTD[i].CHUM.length === 0) {
        CHUM_GRADE = " - "
      } else {
        CHUM_GRADE = (subject.filter(subjectlst => subjectlst.SUB_ID === filterSTD[i].CHUM[0].SUB_ID)[0].STD[0].GRADE).toString()
      }

      let FREE = checkArray(filterSTD[i].FREE);

      let FREE_GRADE = ""
      if (filterSTD[i].FREE.length === 0) {
        FREE_GRADE = " - "
      } else {
        FREE_GRADE = (subject.filter(subjectlst => subjectlst.SUB_ID === filterSTD[i].FREE[0].SUB_ID)[0].STD[0].GRADE).toString()
      }

      pdf.setFontSize(12);

      pdf.text(STD_ORD, PaddingX + 8, cursorYStartLeft, { align: 'left' });
      pdf.text(ID, PaddingX + 20, cursorYStartLeft, { align: 'left' });
      pdf.setFontSize(10);
      pdf.text(FNAME + " " + LNAME, PaddingX + 40, cursorYStartLeft, { align: 'left' });
      pdf.setFontSize(12);
      pdf.text("ม." + STD_CLASS + "." + STD_ROOM, PaddingX + 80, cursorYStartLeft, { align: 'left' });
      pdf.setFontSize(10);
      pdf.text(CHUM, PaddingX + 95, cursorYStartLeft, { align: 'left' });
      pdf.text(CHUM_GRADE, PaddingX + 125, cursorYStartLeft, { align: 'left' });
      pdf.text(FREE, PaddingX + 140, cursorYStartLeft, { align: 'left' });
      pdf.text(FREE_GRADE, PaddingX + 170, cursorYStartLeft, { align: 'left' });

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

  return (
    <div >
      <div className="relative px-4 sm:px-8 rounded-lg justify-center top-28">
        <div className="py-2">
          <div>
            <label className="text-xl tablet:text-4xl font-semibold leading-tight mx-5">
              รายชื่อนักเรียน <br />
            </label>

            <div className="flex items-center">
              <label className="text-sm tablet:text-2xl font-semibold leading-tight mx-5 pt-2">
                ชั้นมัธยมศึกษาปีที่ :
              </label>

              <select
                value={Class}
                onChange={handleSelectChangeClass}
                className="text-sm tablet:text-2xl"
              >
                {Object.keys(arrayRoom).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>

              <label className="text-xl font-semibold leading-tight ml-2">ห้อง :</label>

              <select
                value={Room}
                onChange={handleSelectChangeRoom}
                className="text-sm tablet:text-2xl"
              >
                {arrayRoom[Class].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>



          <div className="p-4">
            <div id="table-to-print" className="m-auto tablet:m-5">
              {/* <table className="rounded-lg shadow-md m-auto tablet:m-5 w-full">
                <thead >
                  <tr className="rounded-lg shadow-md py-5">
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left py-5 pl-5 text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      เลขที่
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-xl  font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      เลขประจำตัวนักเรียน
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ชื่อ
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ชั้นมัธยมศึกษา
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ชุมนุม
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ผลการเรียน
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      เสรี
                    </th>
                    <th
                      className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-base laptop:text-xl font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      ผลการเรียน
                    </th>
                    
                  </tr>
                </thead>

                <tbody >
                  {filterSTD.map((student, index) => (
                    <tr key={index} className="w-max ">
                      <td className=" p-4 w-1/6 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-xl">
                          {student.STD_ORD}
                        </p>
                      </td>
                      <td className=" p-4 w-1/6 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-xl">
                          {student.ID}
                        </p>
                      </td>

                      <td className=" w-1/6 pr-5 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-sm laptop:text-l break-words">
                          {student.FNAME} {student.LNAME}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-xl">
                          ม.{student.STD_CLASS}.{student.STD_ROOM}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l">
                          {checkArray(student.CHUM)}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l">
                          {dictGradeChum[student.ID]}
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white">
                        <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l">
                          {checkArray(student.FREE)}
                        </p>

                        <td className=" w-1/6 border-b border-gray-200 bg-white">
                          <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l">
                            {dictGradeFree[student.ID]}
                          </p>
                        </td>

                      </td>

                    </tr>
                  ))}
                </tbody>
              </table> */}










<div className="w-full overflow-x-auto">
  <table className="rounded-lg shadow-md m-auto w-full">
    <thead>
      <tr className="rounded-lg shadow-md py-5">
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left py-5 pl-3 text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          เลขที่
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          เลขประจำตัวนักเรียน
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          ชื่อ
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          ชั้นมัธยมศึกษา
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          ชุมนุม
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          ผลการเรียน (ชุมนุม)
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          เสรี
        </th>
        <th className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs tablet:text-sm laptop:text-lg font-semibold text-gray-700 uppercase tracking-wider">
          ผลการเรียน (เสรี)
        </th>
      </tr>
    </thead>

    <tbody>
      {filterSTD.map((student, index) => (
        <tr key={index} className="w-max">
          <td className="p-4 w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-xl">
              {student.STD_ORD}
            </p>
          </td>
          <td className="p-4 w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-xl">
              {student.ID}
            </p>
          </td>

          <td className="w-1/8 pr-5 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-sm laptop:text-l break-words">
              {student.FNAME} {student.LNAME}
            </p>
          </td>

          <td className="w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-xl">
              ม.{student.STD_CLASS}.{student.STD_ROOM}
            </p>
          </td>

          <td className="w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l">
              {checkArray(student.CHUM)}
            </p>
          </td>

          <td className="w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l laptop:pl-7 tablet:pl-2 mobile:pl-2">
              {dictGradeChum[student.ID]}
            </p>
          </td>

          <td className="w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l">
              {checkArray(student.FREE)}
            </p>
          </td>

          <td className="w-1/8 border-b border-gray-200 bg-white">
            <p className="text-gray-900 whitespace-no-wrap text-xs tablet:text-base laptop:text-l laptop:pl-7 tablet:pl-2 mobile:pl-2">
              {dictGradeFree[student.ID]}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>






































































            </div>
            <div className="flex justify-end mt-3">
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