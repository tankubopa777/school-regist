import React, { useState } from "react";


function Table(props) {
    const subjects = Object.values(props.subjects);
    for (let i = 0; i < subjects.length; i++) {
        subjects[i].cell_idx = i + 2;
    }

    const [open, setopen] = useState(false);
    const [SubType, setSubType] = useState('CHUM');

    const handleClick = (s) => {
        props.updatesubjectselect(s);
        props.updateTablePage('Edit');
    }
    const sortType = (text) => {
        setopen(!open)
        setSubType(text);
    }

    const toAddSubject = (s) => {
        props.updatesubjectselect(null);
        props.updateTablePage('Register_subject');
    }

    const filterTYPE = subjects.filter(subjectlst => {
        if (subjectlst.SUB_TYPE === SubType) {
            return true;
        }
        return false;
    });

    const Status = (status) => {
        if (status === true) {
            return <div className="bg-green-500 px-2 py-1 text-white rounded-lg">Open</div>
        }
        else {
            return <div className="bg-red-500 px-2 py-1 text-white rounded-lg">Close</div>
        }
    }
    console.log(filterTYPE);


    return (

        <div className="relative top-28 mx-auto rounded-lg">
            <div className="py-2">
                <div>
                    <label className="text-2xl font-semibold leading-tight m-4">
                        {SubType === 'CHUM' ? 'วิชาชุมนุม' : 'วิชาเสรี'}
                    </label>
                    <button
                        className="inline-block px-3 py-2 m-3 shadow-md rounded-lg bg-gray-300 font-bold hover:text-gray-700"
                        onClick={() => setopen(!open)}>
                        Sort
                    </button>

                    {open && (
                        <div className="block bg-white shadow-md rounded px-5 pt-4 pb-5 mb-4">
                            <ul>
                                <div onClick={() => sortType('CHUM')} className="hover:bg-slate-300 font-serif text-left p-3"> วิชาชุมนุม</div>
                                <div onClick={() => sortType('FREE')} className="hover:bg-slate-300 font-serif text-left p-3"> วิชาเสรี</div>
                            </ul>

                        </div>

                    )
                    }
                </div>

                <div className="py-4 ">
                    <div>
                        <table className="rounded-lg shadow-md w-11/12 mx-auto">
                            <thead >
                                <tr className="rounded-lg shadow-md">
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        รหัสวิชา
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่อวิชา
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ห้องเรียน
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่ออาจารย์
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        จำนวนนักเรียน
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        เพิ่มเติม
                                    </th>
                                </tr>
                            </thead>

                            <tbody >
                                {filterTYPE.map((subjectsType, index) => (
                                    <tr key={index} className="bg-red w-max cursor-pointer hover:bg-lime-50" onClick={() => handleClick(subjectsType)}>
                                        <td className=" p-4 w-20 border-b border-gray-200 text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {Status(subjectsType.AVAILABILITY)}
                                            </p>
                                        </td>

                                        <td className=" p-4 border-b border-gray-200 text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_ID}
                                            </p>
                                        </td>

                                        <td className="border-b border-gray-200 text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_NAME}
                                            </p>
                                        </td>

                                        <td className=" border-b border-gray-200 text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_ADDR}
                                            </p>
                                        </td>

                                        <td className=" border-b border-gray-200 text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_PROF[0]}, {subjectsType.SUB_PROF[1]}
                                            </p>
                                        </td>

                                        <td className="  border-b border-gray-200 text-sm text-center">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.STD.length}/{subjectsType.SUB_CAP}
                                            </p>
                                        </td>

                                        <td
                                            className=" border-b border-gray-200 text-sm text-center"
                                        >
                                            <button onClick={() => handleClick(subjectsType)} className="underline">เพิ่มเติม</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <button className="bg-green-600 text-center text-white px-2 py-1 my-5 rounded-lg justify-center" onClick={() => toAddSubject()}>AddSubject</button>
        </div>
        </div>
    );
}
export default Table;