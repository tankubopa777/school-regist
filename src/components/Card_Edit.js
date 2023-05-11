import { editAvailability } from "../dataFetch";
import { useState } from "react";

function Card_Edit(props) {
    const selected = Object.values(props.subjectselect);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    function handleClick() {
        props.updateTablePage('Register_subject');
    }

    function editAvailabilityC() {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 5000);

        editAvailability({ cellidx: props.subjectselect.cell_idx, avail: !props.subjectselect.AVAILABILITY });
    }

    const Status = (status) => {
        if (isButtonDisabled === true) {
            return <div className="bg-gray-600 px-2 py-1 text-white rounded-lg cursor-progress">Loading...</div>
        }
        else if (status === true) {
            return <div className="bg-green-500 px-2 py-1 text-white rounded-lg hover:bg-green-700 cursor-pointer">Open</div>
        }
        else {
            return <div className="bg-red-500 px-2 py-1 text-white rounded-lg hover:bg-red-700 cursor-pointer">Close</div>
        }
    }

    return (
        <div className="flex flex-col items-center laptop:block laptop:w-max m-5 p-4">
            <div className="w-3/4 laptop:w-max rounded-lg bg-gray-200 m-4 p-4 w-22 h-23">
                <div className="px-2 py-2 mb-4">
                    <p onClick={editAvailabilityC} disabled={isButtonDisabled} className="text-center text-sm px-1 mb-2 cursor-pointer" >{Status(props.subjectselect.AVAILABILITY)}</p>
                    <p className="text-start text-sm" > <label className="font-bold">รหัสวิชา :  </label>{props.subjectselect.SUB_ID}</p>
                    <p className="text-start text-sm" > <label className="font-bold">ชื่อวิชา : </label>{props.subjectselect.SUB_NAME}</p>
                    <p className="text-start text-sm" > <label className="font-bold">คุณครู : </label>{props.subjectselect.SUB_PROF[0]} ,{props.subjectselect.SUB_PROF[1]}</p>
                    <p className="text-start text-sm" > <label className="font-bold">จำนวนนักเรียนที่ลงทะเบียน :  </label>{selected[7].length} / {props.subjectselect.SUB_CAP}</p>
                    <p className="text-start text-sm" > <label className="font-bold">ห้องเรียน :  </label>{props.subjectselect.SUB_ADDR}</p>
                </div>

                <div className="flex justify-end">

                    <button className="bg-red-600 px-2.5 py-0.5 mx-2 rounded-md text-center text-slate-100 hover:bg-red-800">
                        Delete

                    </button>

                    <button onClick={() => handleClick()} className="bg-green-600 px-2.5 mx-2 py-0.5 rounded-md text-center text-slate-100 hover:bg-green-800">
                        Edit
                    </button>
                </div>

            </div>
        </div>
    );
}
export default Card_Edit;