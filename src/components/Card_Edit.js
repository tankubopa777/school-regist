function Card_Edit(props) {
    const selected = Object.values(props.subjectselect);
    console.log(selected)
    console.log(props.subjectselect)

    return (
        <div className="inline-block rounded-lg bg-gray-200 m-4 p-4 w-22 h-23">
            <div>
                <p className="" >ชื่อชุมนุม/เสรี : {selected.SUB_NAME}</p>
                <p className="" >คุณครู : {selected.SUB_PROF}</p>
                <p className="" >จำนวนนักเรียนที่ลงทะเบียน : </p>
            </div>

            <div className="flex justify-end">
                <button className="bg-red-600 px-2 mx-2 rounded-md text-center text-slate-100 ">
                    Delete
                </button>

                <button className="bg-green-600 px-2 mx-2 rounded-md text-center text-slate-100">
                    Edit
                </button> 
            </div>
        </div>
    );
}
export default Card_Edit;