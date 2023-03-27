//วิชาเสรี
import Desc from './desc1.js';
function detail() {
    document.getElementById('desc').classList.toggle('hidden');
}


export default function Block_DetailStd() {
    return (
        <div class="w-5/6 tablet:w-1/2">
            <div class="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2">
                <span class="flex" ><input class="" type="checkbox"></input></span>
                <span class="text-xs font-bold break-all p-2"><button onClick={detail}>SF123</button></span>
                <span class="text-xs p-2 break-all">subject name</span>
                <span class="text-xs p-2 break-all">amount</span>
            </div>
            <div id="desc" class="hidden">
                <Desc />
            </div>
        </div>
    );
}