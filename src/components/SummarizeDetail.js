import React, { useState } from 'react'

export default function ChumSubject(props) {
    const [show, setShow] = useState(false);
    const subject = Object.values(props)[0];

    return (
        <div className="w-5/6 tablet:w-1/2 ml-10">
            <table className="w-full">
                <div className="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2">
                    <tr className="w-4/12 text-[0.7rem] p-0 mobile:text-xs font-bold break-all tablet:p-2 flex flex-col justify-center">{subject.SUB_ID}</tr>
                    <tr className="w-1/3 text-[0.5rem] p-0 mobile:text-xs mobile:p-2 break-all flex flex-col justify-center">{subject.SUB_NAME}</tr>
                    <tr className="w-2/12 text-[0.5rem] p-0 mobile:text-xs mobile:p-2 break-all flex flex-col justify-center">{subject.STD.length}/{subject.SUB_CAP}</tr>
                    <button className="text-[0.5rem] p-0 mobile:text-xs mobile:p-2 font-bold hover:text-green-700 flex flex-col justify-center" onClick={() => setShow(!show)}>เพิ่มเติม</button>
                </div>
                {show && <div id="detail">

                    <div className="flex flex-col rounded-lg bg-gray-300 shadow-lg border-2 m-2 p-2">
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ชื่อวิชาเสรี : </td>
                                <td className="text-xs p-2 break-all">{subject.SUB_NAME}</td>
                            </tr>
                        </div>
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ผู้สอน : </td>
                                <td className="text-xs p-2 break-all">{subject.SUB_PROF[0]} {subject.SUB_PROF[1]} {subject.SUB_PROF[2]}</td>
                            </tr>
                        </div>
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ห้องเรียน : </td>
                                <td className="text-xs p-2 break-all">{subject.SUB_ADDR}</td>
                            </tr>
                        </div>
                        <div className="">
                            <tr>
                                <td className="text-xs font-bold break-all p-2">ชั้นปีที่ลงทะเบียนได้ : </td>
                                <td className="text-xs p-2 break-all">ม.{subject.SUB_PERM[0]} {subject.SUB_PERM[1]} {subject.SUB_PERM[2]} {subject.SUB_PERM[3]} {subject.SUB_PERM[4]} {subject.SUB_PERM[5]}</td>
                            </tr>
                        </div>
                    </div>
                </div>}
            </table>
        </div>
    )
}