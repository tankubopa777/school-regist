import { editPassword } from '../dataFetch.js'

export default function Block_DetailStd(props) {
    const changePassword = async (e) => {
        e.preventDefault();
        let password = String(props.user.PASSW);
        let currentPassword = e.target.form.currentPassword.value;
        let newPassword = e.target.form.NewPassword.value;
        let confirmPassword = e.target.form.ConfirmPassword.value;

        if (currentPassword === "" || newPassword === "" || confirmPassword === "") {
            alert("กรุณากรอกข้อมูลให้ครบ")
        } else {

            if (currentPassword === password) {
                if (newPassword === confirmPassword) {
                    editPassword({ cellidx: props.user.CELLIDX, newpass: newPassword })
                    alert("เปลี่ยนรหัสผ่านสำเร็จ")
                } else {
                    alert("รหัสผ่านไม่ตรงกัน")
                }
            } else {
                alert("รหัสผ่านปัจจุบันไม่ถูกต้อง")
            }

        }
    }


    return (
        <div className="w-max h-max tablet:w-[700px] absolute top-28 left-1/2 -translate-x-1/2">
    <div className="hidden tablet:flex flex-wrap flex-col rounded-lg bg-white shadow-lg border-2 m-2 p-2">
        {props.user.TYPE === 'STD' ? (
            <div className="mx-5 className1">
                <h1 className="font-bold flex flex-row justify-center">ข้อมูลนักเรียน</h1>
                <div className="my-2">เลขประจำตัว: {props.user.ID}</div>
                <div className="my-2">
                    ชื่อ - นามสกุล: {props.user.FNAME} {props.user.LNAME}
                </div>
                <div className="my-2">
                    ชั้น: ม. {props.user.STD_CLASS}.{props.user.STD_ROOM}
                </div>
            </div>
        ) : (
            <div className="mx-5 top-1/2">
                <h1 className="font-bold flex flex-row justify-center">ข้อมูลอาจารย์</h1>
                <div className="my-2">
                    ชื่อ - นามสกุล: {props.user.FNAME} {props.user.LNAME}
                </div>
            </div>
        )}


                {/* <div className1="mx-5 ">
                    <h1 className="font-bold flex flex-row justify-center" > ข้อมูลนักเรียน  </h1>
                    <div className="my-2" >เลขประจำตัว : {props.user.ID}</div>
                    <div className="my-2" >ชื่อ - นามสกุล :  {props.user.FNAME} {props.user.LNAME}</div>
                    <div className="my-2" >ชั้น : ม. {props.user.STD_CLASS}.{props.user.STD_ROOM}</div>
                </div>

                <div className2="mx-5">
                    <h1 className="font-bold flex flex-row justify-center" > ข้อมูลอาจารย์  </h1>
                    <div className="my-2" >ชื่อ - นามสกุล :  {props.user.FNAME} {props.user.LNAME}</div>
                </div> */}
            </div>
            <form>
                <div className="flex flex-wrap flex-col rounded-lg bg-white shadow-lg border-2 m-2 p-2">
                    <div className="m-auto">
                        <p className="flex flex-row justify-center text-2xl font-bold">แก้ไขรหัสผ่าน</p>

                        <div className="m-3">
                            <input type="password" className="form-control bg-white shadow-lg rounded-md p-2 border border-black" placeholder="รหัสปัจจุบัน" id='currentPassword' required />
                        </div>

                        <div className="m-3">
                            <input type="password" className="form-control bg-white shadow-lg rounded-md p-2 border border-black" placeholder="รหัสผ่านใหม่" id='NewPassword' required />
                        </div>

                        <div className="m-3">
                            <input type="password" className="form-control bg-white shadow-lg rounded-md p-2 border border-black" placeholder="ยืนยันรหัสผ่านใหม่" id='ConfirmPassword' required />
                        </div>

                        <div className="flex flex-row justify-center">
                            <button onClick={changePassword} className="btn bg-green-400 px-8 py-1 rounded-lg text-white hover:bg-green-600" >ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}
