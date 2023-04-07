import React, { useState, useRef } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function DataStd(props) {
  const dataStd = Object.values(props.users);

  const [Room, setRoom] = useState(1)
  const [Class, setClass] = useState(1)

  const handleInputChangeRoom = (event) => {
    setRoom(parseInt(event.target.value));
  };

  const handleInputChangeClass = (event) => {
    setClass(parseInt(event.target.value));
  };


  let dataStdlst = []
  for (let i = 0; i < dataStd.length; i++) {
    dataStdlst.push(dataStd[i])

  }

  //Sort เลขที่
  const sortedDataStdlst = dataStdlst.sort((a, b) => a.STD_ORD - b.STD_ORD);
  console.log(sortedDataStdlst)

  //Sort ห้องเรียน
  const filterSTD = sortedDataStdlst.filter(dataStdlst => {
    return dataStdlst.STD_ROOM === Room && dataStdlst.STD_CLASS === Class;
  });
  

  function checkArray(arr) {
    if (arr.length === 0) {
      return <div>ยังไม่ได้ลงทะเบียน</div>;
    } else {
      return arr[0].SUB_NAME;
    }
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


  console.log(filterSTD)
  console.log(dataStd)

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8 rounded-lg justify-center">
        <div className="py-8">
          <div>
            <label className="text-2xl font-semibold leading-tight">
              รายชื่อนักเรียน <br/>
            </label>
            <label className="text-l font-semibold leading-tight">
              ชั้นมัธยมศึกษาปีที่ : 
            </label>
            <input className="bg-slate-400 px-2 w-20 rounded-md" text="Room" type="number" placeholder={Class} value={Class} onChange={handleInputChangeClass} />
            <label className="text-l font-semibold leading-tight">
              ห้อง : 
            </label>
            <input className="bg-slate-400 px-2 w-20 rounded-md" text="Class" type="number" placeholder={Room} value={Room} onChange={handleInputChangeRoom} />
          </div>

          <div className="py-4 ">
            <div>
              <table id="table-to-print" className="rounded-lg shadow-md m-5">
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
              <div className="flex justify-end mr-10 mt-3">
                <button onClick={DownloadPDF} className="bg-green-600 font-semibold text-white px-3 py-1 m-3 rounded-md shadow-md">
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStd;