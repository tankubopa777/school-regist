import React, { useState } from "react";

function TableStd(props) {
    const selected = Object.values(props.subjectselect);

    const [open, setOpen] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function ClickShowInput() {
        setShowInput(!showInput);
    }

    function handleInputChangeGrade(event) {
        setInputValue(parseInt(event.target.value));
    }

    function handleInputBlur() {
        setShowInput(false);
    }

    return (

        <div className="container px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <label className="text-2xl font-semibold leading-tight">
                        รายชื่อนักเรียนวิชา {props.subjectselect.SUB_ID} {props.subjectselect.SUB_NAME}
                    </label>

                    {open && (
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
                        <table className="gird grid-cols-5 min-w-full leading-normal">
                            <thead className="">
                                <tr className="w-auto">
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
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        เกรดการเรียน
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="gird grid-cols-5">
                                {selected[7].map((each, index) => (
                                    <tr>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex">
                                                <div>
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {each.ID}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {each.FNAME} {each.LNAME}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {each.CLASS}.{each.ROOM}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <label className="text-gray-900 whitespace-no-wrap hover:bg-neutral-700">
                                                {showInput ? (
                                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                        type="text"
                                                        value={inputValue}
                                                        onChange={handleInputChangeGrade}
                                                        onBlur={handleInputBlur}
                                                        placeholder={each.GRADE} />
                                                ) : (
                                                    <label onClick={ClickShowInput}>{each.GRADE}</label>
                                                )}
                                            </label>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TableStd;