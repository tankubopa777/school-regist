import NavbarAJ from "../components/NavbarAJ";

function DataStd(props) {
  const dataStd = Object.values(props.users)
  
  
  let dataStdlst = []
  for (let i = 0; i < dataStd.length; i++) {
      dataStdlst.push(dataStd[i])
      
  }
  console.log(dataStdlst[0])

  return (
    
    <div>
      <div className="container mx-auto px-4 sm:px-8 rounded-lg justify-center">
        <div className="py-8">
          <div>
            <label className="text-2xl font-semibold leading-tight">
              รายชื่อนักเรียน
            </label>
          </div>

            <div className="py-4 ">
              <div>
                <table className="rounded-lg shadow-md">
                  <thead >
                    <tr className="rounded-lg shadow-md">
                      <th
                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        เลขประจำตัวนักเรียน
                      </th>
                      <th
                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        ชื่อ
                      </th>
                      <th
                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        ชั้นมัธยมศึกษา
                      </th>
                      <th
                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        ชุมนุม
                      </th>
                      <th
                        className="border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                        เสรี
                      </th>
                    </tr>
                  </thead>

                  <tbody >
                    {/* {dataStd.map((student, index) => ( */}
                    <tr  className="w-max ">
                      <td className=" p-4 w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          36227
                        </p>
                      </td>

                      <td className=" w-1/6 sborder-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          นายอินทัช ศรีเภา
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ม.6.3
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Com1
                        </p>
                      </td>

                      <td className=" w-1/6 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Com2
                        </p>
                      </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
                <div className="flex justify-end mr-10 mt-3">
                  <button className="bg-green-600 font-semibold text-white px-3 py-1 m-3 rounded-md shadow-md">
                    Export
                  </button>
                  <button className="bg-green-600 font-semibold text-white px-3 py-1 m-3 rounded-md shadow-md">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default DataStd;