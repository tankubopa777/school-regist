import { useState } from "react";
import { addSubject , editSubject} from "../dataFetch";

function Register_subject(props) {
    //Register Subject

    const [temp_subsel, setTempSubsel] = useState(props.subjectselect)
    const [formData, setFormData] = useState({
        SUB_NAME: "",
        SUB_ID: "",
        SUB_PROF1: "",
        SUB_CAP: "",
        SUB_PROF2: "",
        SUB_PROF: [],
        TYPE: "",
        PERM: [],
        SUB_ADDR: ""
    });

    const handlePermChange = (e) => {
        const { value, checked } = e.target;

        if (value === "all") {
            if (checked) {
                setFormData({ ...formData, PERM: [1, 2, 3, 4, 5, 6] });
            } else {
                setFormData({ ...formData, PERM: [] });
            }
        } else {
            let newPerm = [...formData.PERM];

            if (checked) {
                newPerm.push(parseInt(value));
            } else {
                newPerm = newPerm.filter((p) => p !== parseInt(value));
            }

            setFormData({ ...formData, PERM: newPerm });
        }
    };

    const onEditHandlePermChange = (e) => {
        const { value, checked } = e.target;

        if (value === "all") {
            if (checked) {
                setTempSubsel({ ...temp_subsel, SUB_PERM: [1, 2, 3, 4, 5, 6] });
            } else {
                setTempSubsel({ ...temp_subsel, SUB_PERM: [] });
            }
        } else {
            let newPerm = [...temp_subsel.SUB_PERM];

            if (checked) {
                newPerm.push(parseInt(value));
            } else {
                newPerm = newPerm.filter((p) => p !== parseInt(value));
            }

            setTempSubsel({ ...temp_subsel, SUB_PERM: newPerm });
        }
    };

    function checkIfSubIdExists() {
        const subIds = Object.values(props.subjects).map(sub => sub.SUB_ID);
        const filteredSubIds = subIds.filter(subId => subId !== temp_subsel.SUB_ID);
        return filteredSubIds.includes(temp_subsel.SUB_ID);
      }

    const editSubjectBtn = (e) => {
        e.preventDefault();
        if (temp_subsel.SUB_ID == '' || temp_subsel.SUB_NAME == '' || temp_subsel.SUB_CAP == '' || temp_subsel.SUB_TYPE == '' || temp_subsel.PERM == [] || temp_subsel.TYPE == "" ) {
            alert('ไม่สามารถเว้นช่องว่างได้')
        }
        else if(checkIfSubIdExists(temp_subsel.SUB_ID)) {
            alert('มีรหัสวิชานี้ถูกลงทะเบียนไว้แล้ว')
        }
        else{
            editSubject(temp_subsel);
            alert('แก้ไขเสร็จสิ้น')
            props.updateTablePage("Edit")
        }
        
    };

    const addSubjectBtn = (e) => {
        e.preventDefault();

        if (formData.SUB_ID == '' || formData.SUB_NAME == '' || formData.SUB_CAP == '' || formData.SUB_TYPE == '' || formData.PERM == [] || formData.TYPE == "" ) {
            alert('ไม่สามารถเว้นช่องว่างได้')
        }
        else if (formData.SUB_ID in props.subjects) {
            alert('รหัสวิชานี้ถูกลงทะเบียนไปแล้ว')
        }
        else {
            formData.SUB_CAP = parseInt(formData.SUB_CAP)
            formData.SUB_PROF.push(formData.SUB_PROF1, formData.SUB_PROF2)

            let data = {
                "SUB_TYPE": formData.TYPE,
                "SUB_ID": formData.SUB_ID,
                "SUB_NAME": formData.SUB_NAME,
                "SUB_CAP": formData.SUB_CAP,
                "SUB_PERM": formData.PERM,
                "SUB_PROF": formData.SUB_PROF,
                "SUB_ADDR": formData.SUB_ADDR,
                "STD": [],
                "AVAILABILITY": "true"
            }
            addSubject(data)
            alert('เพิ่มวิชาเสร็จสิ้น')
            setFormData({
                SUB_NAME: "",
                SUB_ID: "",
                SUB_PROF1: "",
                SUB_CAP: "",
                SUB_PROF2: "",
                SUB_PROF: [],
                TYPE: "",
                PERM: [],
                SUB_ADDR: ""
            })

            
            props.updateTablePage("Table")
        }


    };

    if (props.subjectselect === null) {
        return (
            <div className="relative top-28 flex justify-center text-xs tablet:text-sm">
                <div className="inline-block rounded-lg t bg-gray-200 m-4 ">
    
                    <div className="block rounded-lg p-4 bg-neutral-400 text-white">
                        <h1 className="text-center font-bold" >
                            เพิ่มวิชาเรียนใหม่
                        </h1>
                    </div>

                    <form >
                        <div className="grid grid-cols-2 gap-4 p-4 justify-center">

                            <label className="p-2 m-2">
                                รหัสวิชา :
                                <input
                                    required
                                    className="ml-2 px-2"
                                    type="text"
                                    id="SUB_ID"
                                    value={formData.SUB_ID}
                                    onChange={(e) =>
                                        setFormData({ ...formData, SUB_ID: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2 ">
                                ชื่อวิชา :
                                <input
                                    required
                                    className="ml-2 px-2"
                                    type="text"
                                    id="SUB_NAME"
                                    value={formData.SUB_NAME}
                                    onChange={(e) =>
                                        setFormData({ ...formData, SUB_NAME: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ผู้สอน 1 :
                                <input
                                    required
                                    className="ml-2 px-2"
                                    type="text"
                                    id="SUB_PROF1"
                                    value={formData.SUB_PROF1}
                                    onChange={(e) =>
                                        setFormData({ ...formData, SUB_PROF1: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ผู้สอน 2 :
                                <input
                                    required
                                    className="ml-2 px-2"
                                    type="text"
                                    id="SUB_PROF2"
                                    value={formData.SUB_PROF2}
                                    onChange={(e) =>
                                        setFormData({ ...formData, SUB_PROF2: e.target.value })
                                    }
                                />
                            </label>

                            
                            <label className="p-2 m-2">
                                Quota :
                                <input
                                    required
                                    className="ml-2 px-2"
                                    type="text"
                                    id="SUB_CAP"
                                    value={formData.SUB_CAP}
                                    onChange={(e) =>
                                        setFormData({ ...formData, SUB_CAP: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ห้องเรียน :
                                <input
                                    required
                                    className="ml-2 px-2"
                                    type="text"
                                    id="SUB_ADDR"
                                    value={formData.SUB_ADDR}
                                    onChange={(e) =>
                                        setFormData({ ...formData, SUB_ADDR: e.target.value })
                                    }
                                />
                            </label>


                            <div className="flex flex-row">
                                <label className="p-2 m-2">
                                    ภาคชุมนุม : &nbsp;
                                    <input
                                        required
                                        className="m-2 p-2"
                                        type="radio"
                                        id="TYPE"
                                        value="CHUM"
                                        checked={formData.TYPE === "CHUM"}
                                        onChange={(e) =>
                                            setFormData({ ...formData, TYPE: e.target.value })
                                        }
                                    />
                                </label>

                                <label className="p-2 m-2">
                                    ภาคเสรี : &nbsp;
                                    <input
                                        required
                                        className="m-2 p-2"
                                        type="radio"
                                        id="TYPE"
                                        value="FREE"
                                        checked={formData.TYPE === "FREE"}
                                        onChange={(e) =>
                                            setFormData({ ...formData, TYPE: e.target.value })
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                    </form>

                    <label className="px-6 font-bold">รับนักเรียนมัธยมศึกษา</label>

                    <form className="m-2 px-4 pt-2" >
                        <div className="grid grid-cols-3">
                            <label>
                                มัธยมศึกษาปีที่ 1 : &nbsp;
                                <input
                                    type="checkbox"
                                    name="1"
                                    value="1"
                                    checked={formData.PERM.includes(1)}
                                    onChange={handlePermChange}
                                />
                                { }
                            </label>

                            <label >
                                มัธยมศึกษาปีที่ 2 : &nbsp;
                                <input
                                    type="checkbox"
                                    name="2"
                                    value="2"
                                    checked={formData.PERM.includes(2)}
                                    onChange={handlePermChange}
                                />
                            </label>

                            <label>
                                มัธยมศึกษาปีที่ 3 : &nbsp;
                                <input
                                    type="checkbox"
                                    name="3"
                                    value="3"
                                    checked={formData.PERM.includes(3)}
                                    onChange={handlePermChange}
                                />
                            </label>

                            <label>
                                มัธยมศึกษาปีที่ 4 : &nbsp;
                                <input
                                    type="checkbox"
                                    name="4"
                                    value="4"
                                    checked={formData.PERM.includes(4)}
                                    onChange={handlePermChange}
                                />
                            </label>
                            <label>
                                มัธยมศึกษาปีที่ 5 : &nbsp;
                                <input
                                    type="checkbox"
                                    name="5"
                                    value="5"
                                    checked={formData.PERM.includes(5)}
                                    onChange={handlePermChange}
                                />
                            </label>

                            <label>
                                มัธยมศึกษาปีที่ 6 : &nbsp;
                                <input
                                    type="checkbox"
                                    name="6"
                                    value="6"
                                    checked={formData.PERM.includes(6)}
                                    onChange={handlePermChange}
                                />
                            </label>
                        </div>
                    </form>

                    <input onClick={addSubjectBtn} className="float-right m-4 h-11 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Submit" />

                    <button onClick={() => props.updateTablePage("Table")} type="button" className="float-right m-4 bg-neutral-300 rounded-md py-2 px-4 inline-flex items-center justify-center text-white hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <label className="text-lg font-bold pr-1">Exit</label>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    //Edit Register Subject
    else {
        return (
            <div className="flex justify-center">
                <div className="inline-block rounded-lg t bg-gray-200 m-4 ">
    
                    <div className="block rounded-lg p-4 bg-neutral-400">
                        <h1 className="text-center font-bold" >
                            แก้ไขข้อมูลรายวิชา {props.subjectselect.SUB_ID} {props.subjectselect.SUB_NAME}
                        </h1>
                    </div>

                    <form >
                        <div className="grid grid-cols-2 gap-4 p-4">

                            <label className="p-2 m-2">
                                รหัสวิชา :
                                <input
                                    required
                                    className="ml-2"
                                    type="text"
                                    id="SUB_ID"
                                    value={temp_subsel.SUB_ID}
                                    onChange={(e) =>
                                        setTempSubsel({ ...temp_subsel, SUB_ID: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ชื่อวิชา :
                                <input
                                    required
                                    className="ml-2"
                                    type="text"
                                    id="SUB_NAME"
                                    value={temp_subsel.SUB_NAME}
                                    onChange={(e) =>
                                        setTempSubsel({ ...temp_subsel, SUB_NAME: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ผู้สอน 1 :
                                <input
                                    required
                                    className="ml-2"
                                    type="text"
                                    id="SUB_PROF1"
                                    value={temp_subsel.SUB_PROF[0]}
                                    onChange={(e) =>
                                        setTempSubsel({ ...temp_subsel, SUB_PROF: [e.target.value, temp_subsel.SUB_PROF[1]] })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ผู้สอน 2 :
                                <input
                                    required
                                    className="ml-2"
                                    type="text"
                                    id="SUB_PROF2"
                                    value={temp_subsel.SUB_PROF[1]}
                                    onChange={(e) =>
                                        setTempSubsel({ ...temp_subsel, SUB_PROF: [temp_subsel.SUB_PROF[0], e.target.value] })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                Quota :
                                <input
                                    required
                                    className="ml-2"
                                    type="text"
                                    id="SUB_CAP"
                                    value={temp_subsel.SUB_CAP}
                                    onChange={(e) =>
                                        setTempSubsel({ ...temp_subsel, SUB_CAP: e.target.value })
                                    }
                                />
                            </label>

                            <label className="p-2 m-2">
                                ห้องเรียน :
                                <input
                                    required
                                    className="ml-2"
                                    type="text"
                                    id="SUB_ADDR"
                                    value={temp_subsel.SUB_ADDR}
                                    onChange={(e) =>
                                        setTempSubsel({ ...temp_subsel, SUB_ADDR: e.target.value })
                                    }
                                />
                            </label>


                            <div className="grid grid-cols-2 ">
                                <label className="p-2 m-2">
                                    ภาคชุมนุม :
                                    <input
                                        required
                                        className="m-2 p-2"
                                        type="radio"
                                        id="TYPE"
                                        value="CHUM"
                                        checked={temp_subsel.SUB_TYPE === "CHUM"}
                                        onChange={(e) =>
                                            setTempSubsel({ ...temp_subsel, SUB_TYPE: e.target.value })
                                        }
                                    />
                                </label>

                                <label className="p-2 m-2">
                                    ภาคเสรี :
                                    <input
                                        required
                                        className="m-2 p-2"
                                        type="radio"
                                        id="TYPE"
                                        value="FREE"
                                        checked={temp_subsel.SUB_TYPE === "FREE"}
                                        onChange={(e) =>
                                            setTempSubsel({ ...temp_subsel, SUB_TYPE: e.target.value })
                                        }
                                    />
                                </label>
                            </div>
                        </div>

                    </form>

                    <label className="px-6 font-bold">รับนักเรียนมัธยมศึกษา</label>

                    <form className="m-2 px-4 pt-2" >
                        <div className="grid grid-cols-3">
                            <label>
                                มัธยมศึกษาปีที่ 1 :
                                <input
                                    type="checkbox"
                                    name="1"
                                    value="1"
                                    checked={temp_subsel.SUB_PERM.includes(1)}
                                    onChange={onEditHandlePermChange}
                                />
                                { }
                            </label>

                            <label >
                                มัธยมศึกษาปีที่ 2 :
                                <input
                                    type="checkbox"
                                    name="2"
                                    value="2"
                                    checked={temp_subsel.SUB_PERM.includes(2)}
                                    onChange={onEditHandlePermChange}
                                />
                            </label>

                            <label>
                                มัธยมศึกษาปีที่ 3 :
                                <input
                                    type="checkbox"
                                    name="3"
                                    value="3"
                                    checked={temp_subsel.SUB_PERM.includes(3)}
                                    onChange={onEditHandlePermChange}
                                />
                            </label>

                            <label>
                                มัธยมศึกษาปีที่ 4 :
                                <input
                                    type="checkbox"
                                    name="4"
                                    value="4"
                                    checked={temp_subsel.SUB_PERM.includes(4)}
                                    onChange={onEditHandlePermChange}
                                />
                            </label>
                            <label>
                                มัธยมศึกษาปีที่ 5 :
                                <input
                                    type="checkbox"
                                    name="5"
                                    value="5"
                                    checked={temp_subsel.SUB_PERM.includes(5)}
                                    onChange={onEditHandlePermChange}
                                />
                            </label>

                            <label>
                                มัธยมศึกษาปีที่ 6 :
                                <input
                                    type="checkbox"
                                    name="6"
                                    value="6"
                                    checked={temp_subsel.SUB_PERM.includes(6)}
                                    onChange={onEditHandlePermChange}
                                />
                            </label>
                        </div>
                    </form>

                    <input onClick={editSubjectBtn} className="float-right m-4 h-11 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Submit" />

                    <button onClick={() => props.updateTablePage("Edit")} type="button" className="float-right m-4 bg-neutral-300 rounded-md py-2 px-4 inline-flex items-center justify-center text-white hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <label className="text-lg font-bold pr-1">Exit</label>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
export default Register_subject;