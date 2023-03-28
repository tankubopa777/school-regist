import React, { useState } from "react";

function TableStd() {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        
        <div className="container px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <label className="text-2xl font-semibold leading-tight">
                        รายชื่อนักเรียน
                    </label>
                    <button
                        className="inline-block px-3 py-2 m-3 shadow-md rounded-lg  bg-gray-300 font-bold hover:text-gray-700"
                        onClick={() => setOpen2(!open2)}>
                        Sort
                    </button>

                    {open2 && (
                        <div className="block bg-white shadow-md rounded px-5 pt-4 pb-5 mb-4">
                            <ul>
                                <li className="hover:bg-slate-300 font-serif text-left p-3"> วิชาชุมนุม</li>
                                <li className="hover:bg-slate-300 font-serif text-left p-3"> วิชาเสรี</li>
                            </ul>

                        </div>

                    )
                    }



                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal">
                            <thead className="">
                                <tr classNameName="w-auto">
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        เลขประจำตัวนักเรียน
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่อ
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        มัธยมศึกษา
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">
                                            <div>
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    362227
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">นายอินทัช ศรีเภา</p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">ม.6.3</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TableStd;