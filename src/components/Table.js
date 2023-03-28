import React, { useState } from "react";

function Table(props) {
    const subjects = Object.values(props.subjects);
    console.log(subjects);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <label className="text-2xl font-semibold leading-tight">
                        วิชาชุมนุม
                    </label>
                    <button
                        classNameName="inline-block px-3 py-2 m-3 shadow-md rounded-lg  bg-gray-300 font-bold hover:text-gray-700"
                        onClick={() => setOpen2(!open2)}>
                        Sort
                    </button>

                    {open2 && (
                        <div className="block bg-white shadow-md rounded px-5 pt-4 pb-5 mb-4">
                            <ul>
                                <li classNameName="hover:bg-slate-300 font-serif text-left p-3"> วิชาชุมนุม</li>
                                <li classNameName="hover:bg-slate-300 font-serif text-left p-3"> วิชาเสรี</li>
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
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        รหัสวิชา
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่อวิชา
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ห้องเรียน
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่ออาจารย์
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Quota
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                    ></th>
                                </tr>
                            </thead>

                            <tbody>
                                {subjects.map((subjects, index) => (
                                <div key={index}>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex">
                                                <div>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {subjects.SUB_ID}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjects.SUB_NAME}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjects.SUB_ADDR}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjects.SUB_PROF}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {subjects.STD.length}/{subjects.SUB_CAP}
                                            </p>
                                        </td>


                                        <td
                                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left"
                                        >
                                            <button
                                                onClick={() => setOpen(!open)}
                                                type="button"
                                                className="inline-block text-gray-500 hover:text-gray-700"
                                            >
                                                <svg
                                                    className="inline-block h-6 w-6 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                                    />
                                                </svg>
                                            </button>

                                            {open && (
                                                <div className="absolute  bg-white shadow-md rounded px-5 pt-4 pb-5 mb-4">
                                                    <ul>
                                                        <li classNameName="hover:bg-slate-300 text-left p-3"> Edit</li>
                                                        <li classNameName="hover:bg-slate-300 text-left p-3"> Grade</li>
                                                    </ul>

                                                </div>

                                            )
                                            }
                                        </td>
                                    </tr>
                                </div>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Table;