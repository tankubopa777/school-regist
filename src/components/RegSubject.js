function Register_subject() {
    return (
        <div className="flex justify-center">
            <div className="inline-block rounded-lg t bg-gray-200 m-4 ">

                <div className="block rounded-lg p-4 bg-neutral-400">
                    <h1 className="text-center font-bold" >
                        ลงทะเบียนวิชาเรียน
                    </h1>
                </div>





                <form >
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <label className="p-2 m-2">
                            ชื่อวิชา :
                            <input required className="ml-2" type="text" name="name" />
                        </label>

                        <label className="p-2 m-2">
                            รหัสวิชา :
                            <input required className="ml-2" type="text" name="name" />
                        </label>

                        <label className="p-2 m-2">
                            ชื่ออาจารย์ :
                            <input required className="ml-2" type="text" name="name" />
                        </label>

                        <label className="p-2 m-2">
                            Quota :
                            <input required className="ml-2" type="text" name="name" />
                        </label>
                        <form >
                            <div className="grid grid-cols-2 ">
                                <label className="p-2 m-2">
                                    ภาคชุมนุม :
                                    <input required className="m-2 p-2" type="radio" name="name" />
                                </label>

                                <label className="p-2 m-2">
                                    ภาคเสรี :
                                    <input required className="m-2 p-2" type="radio" name="name" />
                                </label>
                            </div>

                        </form>

                    </div>

                </form>

                <label className="px-6 font-bold">รับนักเรียนมัธยมศึกษา</label>

                <form className="m-2 px-4 pt-2" >
                    <div className="grid grid-cols-3">
                        <label>
                            มัธยมศึกษาปีที่ 1 :
                            <input className="m-2 p-2" type="checkbox" name="name" />
                        </label>

                        <label >
                            มัธยมศึกษาปีที่ 2 :
                            <input className="ml-2 pl-2" type="checkbox" name="name" />
                        </label>
                        <label>
                            มัธยมศึกษาปีที่ 3 :
                            <input className="m-2 p-2" type="checkbox" name="name" />
                        </label>

                        <label>
                            มัธยมศึกษาปีที่ 4 :
                            <input className="m-2 p-2" type="checkbox" name="name" />
                        </label>
                        <label>
                            มัธยมศึกษาปีที่ 5 :
                            <input className="m-2 p-2" type="checkbox" name="name" />
                        </label>

                        <label>
                            มัธยมศึกษาปีที่ 6 :
                            <input className="m-2 p-2" type="checkbox" name="name" />
                        </label>
                    </div>
                </form>

                <input className="float-right m-4 h-11 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Submit" />
                
                <button type="button" className="float-right m-4 bg-neutral-300 rounded-md py-2 px-4 inline-flex items-center justify-center text-white hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <label className="text-lg font-bold pr-1">Exit</label>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Register_subject;