import React, { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function DataStd(props) {

  //Key ชั้นมัธยมศึกษา Value ห้องเรียน
  const arrayRoom = {
    1 : [],
    2 : [],
    3 : [],
    4 : [],
    5 : [],
    6 : [],
  }

  const dataStd = Object.values(props.users);

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

  function checkArray(arr) {
    if (arr.length === 0) {
      return <div>ยังไม่ได้ลงทะเบียน</div>;
    } else {
      return arr[0].SUB_NAME;
    }
  }

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
              {Object.keys(arrayRoom).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>

            <label className="text-l font-semibold leading-tight mr-2">
              ห้อง :
            </label>

            <select value={Room} onChange={handleSelectChangeRoom}>
              {arrayRoom[Class].map((value) => (
                <option value={value}>{value}</option>
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
              <button className="bg-green-600 font-semibold text-white px-3 py-1 m-3 rounded-md shadow-md">
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