import { memo, useState, useEffect, useRef } from "react";

const TableStd = memo((props) => {
    const selected = Object.values(props.subjectselect);

    const [editingRow, setEditingRow] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (editingRow !== null && inputRef.current !== null) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, [editingRow]);

      
    useEffect(() => {
    const interval = setInterval(() => {
        props.updatesubjectselect({ ...props.subjectselect, cell_idx: props.subjectselect.cell_idx });
    }, 500);

    return () => clearInterval(interval);
    }, [props.subjectselect]);

    function handleClickRow(index) {
      setEditingRow(index);
    }
  
    function handleInputChange(event, index) {
        const newSelected = [...selected];
        newSelected[7][index].GRADE = event.target.value;
        props.updatesubjectselect(
          Object.assign({}, props.subjectselect, { [props.subjectcode]: newSelected })
        );
      }
      
    function handleInputBlur() {
      setEditingRow(null);
    }

    function handleKeyDown(event, index) {
        if (event.key === 'Enter') {
            setEditingRow(editingRow + 1)
        }

    }


    return (

        <div>
            <div className="flex flex-col items-center py-3 top-28">
                <div>
                    <label className="text-3xl font-semibold leading-tight mobile:text-xl">
                        รายชื่อนักเรียนวิชา : {props.subjectselect.SUB_ID} {props.subjectselect.SUB_NAME}
                    </label>

                </div>
                <div className="pt-4">
                    <div className="overflow-scroll h-[70vh] scrollbar-hide laptop:w-max shadow-md rounded-lg">

                        <table id="table-to-print" className="gird grid-cols-5 min-w-full leading-normal break-words">
                            <thead className="sticky top-0">
                                <tr className="w-auto">
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-x mobile:text-sm font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        เลขประจำตัวนักเรียน
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-x mobile:text-sm font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ชื่อ
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-x mobile:text-sm font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        มัธยมศึกษา
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-x mobile:text-sm font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        ผลการเรียน
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="gird grid-cols-5">
                                {selected[7].map((each, index) => (
                                    <tr>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-x">
                                            <div className="flex">
                                                <div>
                                                    <p className="text-gray-900 whitespace-no-wrap text-xs mobile:text-sm">
                                                        {each.ID}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-x mobile:text-x">
                                            <p className="text-gray-900 whitespace-no-wrap">

                                                {each.FNAME} {each.LNAME}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-x mobile:text-x">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {each.CLASS}.{each.ROOM}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-x mobile:text-x">
                                            <label className="text-gray-900 whitespace-no-wrap hover:bg-neutral-700">
                                                {editingRow === index ? (
                                                    <input
                                                        ref={inputRef}
                                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded h-8 w-16 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                        type="text"
                                                        value={each.GRADE}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                        onBlur={handleInputBlur}
                                                        autoFocus
                                                        onKeyDown={(event) => handleKeyDown(event, index)}
                                                        autoComplete="off"
                                                    />

                                                ) : (
                                                    <label
                                                        className="text-gray-900 whitespace-no-wrap px-6 py-2 hover:bg-neutral-300 cursor-pointer"
                                                        onClick={() => handleClickRow(index)}
                                                    >
                                                        {each.GRADE}
                                                    </label>
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
});
export default TableStd;