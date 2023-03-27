function Grade() {
    return (
        <div>
            <div className="flex justify-center">
                <div class="container px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <label class="text-2xl font-semibold leading-tight">
                                รายชื่อนักเรียน
                            </label>
                            <div >
                                        <button className="bg-slate-400 px-4 mx-3 mt-3 rounded-md">
                                            <label className="font-medium items-center">Sort</label>
                                        </button>

                                        <label className="font-medium items-center mx-3">
                                            มัธยมศึกษาปีที่
                                        </label>
                                        <label>
                                            6.3
                                        </label>
                                    </div>

                        </div>
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div
                                class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                            >
                                <table class="min-w-full leading-normal">
                                    <thead class="">
                                        <tr className="w-auto">
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                เลขประจำตัวนักเรียน
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                ชื่อ
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                มัธยมศึกษา
                                            </th>

                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                ชุมนุม
                                            </th>

                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                เสรี
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>

                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    362227
                                                </p>
                                            </td>

                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">นายอินทัช ศรีเภา</p>
                                            </td>

                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">ม.6.3</p>
                                            </td>

                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">COMPUTER CONFIGURATION</p>
                                            </td>

                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">COMPUTER DESIGN  </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mx-4 h-10 ">
                <button className="bg-green-600 px-3 mx-2 rounded-md text-center text-slate-100">
                    Export
                </button>

                <button className="bg-green-600 px-3 mx-2 rounded-md text-center text-slate-100 ">
                    Submit
                </button>
            </div>

        </div>
    );
}
export default Grade;