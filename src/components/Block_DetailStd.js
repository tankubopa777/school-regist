function Block_DetailStd(props) {
    return (
        <div>
            <div className="flex flex-wrap flex-col rounded-lg bg-gray-200 m-4 p-4">
                <h1 className="font-bold flex flex-row justify-center" > ข้อมูลนักเรียน  </h1>
                <div className="" >เลขประจำตัว : {props.user.ID}</div>
                <div className="" >ชื่อ - นามสกุล :  {props.user.FNAME} {props.user.LNAME}</div>
                <div className="" >ชั้น : ม. {props.user.STD_CLASS}.{props.user.STD_ROOM}</div>
            </div>
        </div>
    );
}

export default Block_DetailStd;