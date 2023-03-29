function Card_Edit(props) {
    const selected = Object.values(props.subjectselect);
    console.log(selected)
    console.log(props.subjectselect)

    function handleClick() {
        console.log(props.tablepage); 
        props.updateTablePage('Register_subject');
    }

    return (
        <div className="inline-block rounded-lg bg-gray-200 m-4 p-4 w-22 h-23">
            <div>
                <p className="text-start text-xs" >ชื่อชุมนุม/เสรี : {props.subjectselect.SUB_NAME}</p>
                <p className="text-start text-xs" >คุณครู : {props.subjectselect.SUB_PROF}</p>
                <p className="text-start text-xs" >จำนวนนักเรียนที่ลงทะเบียน : {selected[7].length} /{props.subjectselect.SUB_CAP}</p>
                <p className="text-start text-xs" >รหัสวิชา : {props.subjectselect.SUB_ID}</p>
                <p className="text-start text-xs" >ห้องเรียน : {props.subjectselect.SUB_ADDR}</p>
            </div>

            <div className="flex justify-end">
                <button className="bg-red-600 px-2 mx-2 rounded-md text-center text-slate-100 ">
                    Delete
                </button>

                <button onClick={() => handleClick()} className="bg-green-600 px-2 mx-2 rounded-md text-center text-slate-100">
                    Edit
                </button> 
            </div>
            
        </div>
    );
}
export default Card_Edit;