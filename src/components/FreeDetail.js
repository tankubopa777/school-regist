import React, { useState } from 'react'
import { redirect, useNavigate, useHistory } from 'react-router-dom';

export default function FreeDetail(props) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const subject = Object.values(props)[0];
    const user = Object.values(props)[1];

    const handleClick = (subject) => {
            if (user.FREE.includes(subject)) {
                alert("คุณได้ลงทะเบียนวิชานี้ไปแล้ว");
            } else if (subject.STD.length == subject.SUB_CAP) {
                alert("วิชานี้เต็มแล้ว");
            } else if (user.FREE.length == 1) {
                alert("คุณได้ลงทะเบียนไปแล้ว");
            } else if (!(user.STD_CLASS == subject.SUB_PERM[0]) || (user.STD_CLASS == subject.SUB_PERM[1]) || (user.STD_CLASS == subject.SUB_PERM[2]) || (user.STD_CLASS == subject.SUB_PERM[3]) || (user.STD_CLASS == subject.SUB_PERM[4]) || (user.STD_CLASS == subject.SUB_PERM[5])) {
                alert("ไม่สามารถลงทะเบียนได้ โปรดดูมัธยมที่เปิดรับ");
            } else if(!subject.AVAILABILITY){
                alert("วิชานี้ปิดลงทะเบียน");  
            } else {
                let confirm = prompt("กรุณาใส่รหัสวิชาเพื่อยืนยันการลงทะเบียน")
                if (confirm.toLowerCase() == (subject.SUB_ID).toLowerCase()) {
                    props.updateUser({
                        ...user,
                        FREE: [subject],
                        FREEREG: 0
                    })
                    alert("ลงทะเบียนสำเร็จ")
                    navigate('/วิชาที่ลงทะเบียนเเล้ว');
                } else {
                    alert("ลงทะเบียนไม่สำเร็จ")
                }
            }
    }

    return (
        <div className="w-11/12 laptop:w-3/5 m-auto laptop:ml-10">
            <table className="w-full">
                <tbody>
                    <tr className="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2">
                        <td className="w-2/14 text-sm tablet:text-xl p-0 font-bold break-all tablet:p-1 flex flex-col justify-center">{subject.SUB_ID}</td>
                        <td className="w-1/3 text-sm tablet:text-xl p-0 tablet:p-1 break-all flex flex-col justify-center truncate max-w-[10rem]">{subject.SUB_NAME}</td>
                        <td className="w-1/6 text-sm tablet:text-xl p-0 tablet:p-1 break-all flex flex-col justify-center pl-2">{subject.STD.length}/{subject.SUB_CAP}</td>
                        <td><button className="text-sm tablet:text-xl p-0 tablet:p-1 font-bold hover:text-green-700 flex flex-col justify-center" onClick={() => setShow(!show)}>เพิ่มเติม</button></td>
                        <td><button className="text-sm tablet:text-xl p-0 tablet:p-1 font-bold hover:text-green-700 flex flex-col justify-center" onClick={() => handleClick(subject)}>ลงทะเบียน</button></td>
                    </tr>
                    {show && <tr id="detail">

                        <td className="flex flex-col rounded-lg bg-gray-300 shadow-lg border-2 m-2 p-2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-sm tablet:text-xl font-bold break-all p-2">ชื่อวิชาเสรี : </td>
                                        <td className="text-sm tablet:text-xl p-2 break-all">{subject.SUB_NAME}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-sm tablet:text-xl font-bold break-all p-2">ผู้สอน : </td>
                                        <td className="text-sm tablet:text-xl p-2 break-all">{subject.SUB_PROF[0]} {subject.SUB_PROF[1]} {subject.SUB_PROF[2]}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-sm tablet:text-xl font-bold break-all p-2">ห้องเรียน : </td>
                                        <td className="text-sm tablet:text-xl p-2 break-all">{subject.SUB_ADDR}</td>
                                    </tr>

                                    <tr>
                                        <td className="text-sm tablet:text-xl font-bold break-all p-2">ชั้นปีที่ลงทะเบียนได้ : </td>

                                        <td className="text-sm tablet:text-xl p-2 break-all">ม.{subject.SUB_PERM[0]} {subject.SUB_PERM[1]} {subject.SUB_PERM[2]} {subject.SUB_PERM[3]} {subject.SUB_PERM[4]} {subject.SUB_PERM[5]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}