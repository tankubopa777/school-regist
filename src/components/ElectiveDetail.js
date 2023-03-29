import React, { useState } from 'react'
export default function ElectiveSubject(subjects) {
    const [show, setShow] = useState(false);
    const subject = Object.values(subjects);

    return (
        <div className="w-5/6 tablet:w-1/2 ml-10">
            <table className="w-full">
                <div className="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2">
                    <tr className="flex" ><input className="" type="checkbox"></input></tr>
                    <tr className="w-1/3 text-xs font-bold break-all p-2 ">{subject[0].SUB_ID}</tr>
                    <tr className="w-1/3 text-xs p-2 break-all">{subject[0].SUB_NAME}</tr>
                    <tr className="w-2/12 text-xs p-2 break-all">{subject[0].STD.length}/{subject[0].SUB_CAP}</tr>
                    <button className="text-xs p-2 font-bold hover:text-green-700 " onClick={() => setShow(!show)}>เพิ่มเติม</button>
                </div>
                {show && <div id="detail">

                    <div className="flex flex-col rounded-lg bg-gray-300 shadow-lg border-2 m-2 p-2">
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ชื่อวิชาเสรี : </td>
                                <td className="text-xs p-2 break-all">{subject[0].SUB_NAME}</td>
                            </tr>
                        </div>
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ผู้สอน : </td>
                                <td className="text-xs p-2 break-all">{subject[0].SUB_PROF[0]} {subject[0].SUB_PROF[1]} {subject[0].SUB_PROF[2]}</td>
                            </tr>
                        </div>
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ห้องเรียน : </td>

                                <td className="text-xs p-2 break-all">{subject[0].SUB_ADDR}</td>
                            </tr>
                        </div>
                    </div>
                </div>}
            </table>
        </div>
    )
}