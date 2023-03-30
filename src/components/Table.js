import React, { useState } from "react";


function Table(props) {
    const subjects = Object.values(props.subjects);

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
        props.updatesubjectselect(s);
        props.updateTablePage('Register_subject');
    }

    const filterTYPE = subjects.filter(subjectlst => { 
        if (subjectlst.SUB_TYPE === SubType) {
            return subjectlst.SUB_TYPE === SubType;
        }
        else if (subjectlst.SUB_TYPE === SubType){
            return subjectlst.SUB_TYPE === SubType;
        } 
      });
    
    return (

        <div className="container mx-auto px-4 sm:px-8 rounded-lg">
            <div className="py-8">
                <div>
                    <label className="text-2xl font-semibold leading-tight">
                        วิชาชุมนุม
                    </label>
                    <button
                        className="inline-block px-3 py-2 m-3 shadow-md rounded-lg  bg-gray-300 font-bold hover:text-gray-700"
                        onClick={() => setopen(!open)}>
                        Sort
                    </button>

                    {open && (
                        <div className="block bg-white shadow-md rounded px-5 pt-4 pb-5 mb-4">
                            <ul>
                                <div onClick={()=>sortType('CHUM')} className="hover:bg-slate-300 font-serif text-left p-3"> วิชาชุมนุม</div>
                                <div onClick={()=>sortType('FREE')} className="hover:bg-slate-300 font-serif text-left p-3"> วิชาเสรี</div>
                            </ul>

                        </div>

                    )
                    }
                </div>

                <div className="py-4 ">
                    <div>
                        <table className="rounded-lg shadow-md">
                            <thead >
                                <tr className="rounded-lg shadow-md">
                                    <th 
                                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        รหัสวิชา
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่อวิชา
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ห้องเรียน
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่ออาจารย์
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Quota
                                    </th>
                                    <th
                                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >ICON</th>
                                </tr>
                            </thead>

                            <tbody >
                                {filterTYPE.map((subjectsType, index) => (
                                    <tr key={index} className="w-max ">
                                        <td className=" p-4 w-1/6 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_ID}
                                            </p>
                                        </td>

                                        <td className=" w-1/6 sborder-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_NAME}
                                            </p>
                                        </td>

                                        <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_ADDR}
                                            </p>
                                        </td>

                                        <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.SUB_PROF[0]} , {subjectsType.SUB_PROF[1]}
                                            </p>
                                        </td>

                                        <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjectsType.STD.length}/{subjectsType.SUB_CAP}
                                            </p>
                                        </td>


                                        <td
                                            className=" w-1/6 border-b border-gray-200 bg-white text-sm text-left"
                                        >
                                            <button onClick={() => handleClick(subjectsType)}>add</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button className="bg-green-600 text-center text-white" onClick={() => toAddSubject(subjects)}>AddSubject</button>
        </div>
    );
}
export default Table;