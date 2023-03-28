//วิชาชุมนุม
function detail() {
    document.getElementById('desc').classList.toggle('hidden');
}
export default function Block_DetailStd() {
    return (
        <div className="w-5/6 tablet:w-1/2 ml-10">
            <div onClick={detail} className="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2 cursor-pointer">
                <span className="flex" ><input className="" type="checkbox"></input></span>
                <span className="text-xs font-bold break-all p-2">[SF123]</span>
                <span className="text-xs p-2 break-all">[subject name]</span>
                <span className="text-xs p-2 break-all">[amount]</span>
            </div>

            <div id="desc" className="hidden">
                <div className="">
                    <div className="flex flex-col rounded-lg bg-gray-300 shadow-lg border-2 m-2 p-2">
                        <div className="">
                            <span className="text-xs font-bold break-all p-2">ชื่อชุมนุม/เสรี : </span>
                            <span className="text-xs p-2 break-all">[subject name]</span>
                        </div>
                        <div className="">
                            <span className="text-xs font-bold break-all p-2">ผู้สอน : </span>
                            <span className="text-xs p-2 break-all">[Ajarn]</span>
                        </div>
                        <div className="">
                            <span className="text-xs font-bold break-all p-2">ห้องเรียน : </span>
                            <span className="text-xs p-2 break-all">[ROOM]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}