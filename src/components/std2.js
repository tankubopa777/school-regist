//วิชาชุมนุม
function detail() {
    document.getElementById('desc').classList.toggle('hidden');
}
export default function Block_DetailStd() {
    return (
        <div class="w-5/6 tablet:w-1/2 ml-10">
            <div onClick={detail} class="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2 cursor-pointer">
                <span class="flex" ><input class="" type="checkbox"></input></span>
                <span class="text-xs font-bold break-all p-2">[SF123]</span>
                <span class="text-xs p-2 break-all">[subject name]</span>
                <span class="text-xs p-2 break-all">[amount]</span>
            </div>

            <div id="desc" class="hidden">
                <div class="">
                    <div class="flex flex-col rounded-lg bg-gray-300 shadow-lg border-2 m-2 p-2">
                        <div class="">
                            <span class="text-xs font-bold break-all p-2">ชื่อชุมนุม/เสรี : </span>
                            <span class="text-xs p-2 break-all">[subject name]</span>
                        </div>
                        <div class="">
                            <span class="text-xs font-bold break-all p-2">ผู้สอน : </span>
                            <span class="text-xs p-2 break-all">[Ajarn]</span>
                        </div>
                        <div class="">
                            <span class="text-xs font-bold break-all p-2">ห้องเรียน : </span>
                            <span class="text-xs p-2 break-all">[ROOM]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}