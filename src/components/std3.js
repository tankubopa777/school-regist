//วิชาที่เลือกไว้
export default function Block_DetailStd() {
    return (
        <div className="w-5/6 tablet:w-1/2">
            <div className="flex justify-evenly rounded-lg bg-white shadow-lg border-2 m-2 p-2">
                <span className="flex" ><input className="" type="checkbox"></input></span>
                <span className="text-xs font-bold break-all p-2">SF123</span>
                <span className="text-xs p-2 break-all">subject name</span>
                <span className="text-xs p-2 break-all">amount</span>
            </div>
        </div>
    );
}