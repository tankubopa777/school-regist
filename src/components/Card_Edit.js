function Card_Edit(props) {
    const selected = Object.values(props.subjectselect);

    function handleClick() { 
        props.updateTablePage('Register_subject');
    }
    const Status = (status) => {
        if (status === 'TRUE') {
            return <div className="bg-green-500 px-2 py-1 text-white rounded-lg">Open</div>
        }
        else {
            return <div className="bg-red-500 px-2 py-1 text-white rounded-lg">Close</div>
        }
    }

    return (
        <div className="inline-block rounded-lg bg-gray-200 m-4 p-4 w-22 h-23">
            <div>
                <p className="text-start text-xs" >{Status(props.subjectselect.AVAILABILITY)}</p>
                <p className="text-start text-xs" > <label className="font-bold">ชื่อชุมนุม/เสรี : </label>{props.subjectselect.SUB_NAME}</p>
                <p className="text-start text-xs" > <label className="font-bold">คุณครู : </label>{props.subjectselect.SUB_PROF}</p>
                <p className="text-start text-xs" > <label className="font-bold">จำนวนนักเรียนที่ลงทะเบียน :  </label>{selected[7].length} / {props.subjectselect.SUB_CAP}</p>
                <p className="text-start text-xs" > <label className="font-bold">รหัสวิชา :  </label>{props.subjectselect.SUB_ID}</p>
                <p className="text-start text-xs" > <label className="font-bold">ห้องเรียน :  </label>{props.subjectselect.SUB_ADDR}</p>
            </div>

            <div className="flex justify-end">
                <button className="bg-red-600 px-2 mx-2 rounded-md text-center text-slate-100 "> // Dropdown สำหรับเปลี่ยนสถานะวิชา
                    Switch Status
                </button>

                <button onClick={() => handleClick()} className="bg-green-600 px-2 mx-2 rounded-md text-center text-slate-100">
                    Edit
                </button> 
            </div>
            
        </div>
    );
}
export default Card_Edit;