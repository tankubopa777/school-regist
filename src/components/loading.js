export default function loading() {
    return (

        <div className="w-max h-max absolute top-1/2 left-1/2">
            <div className="relative bottom-6 right-6">
                <div className="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>
                <div className="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-green-600 border-t-transparent shadow-md"></div>
            </div>
        </div>
    );
}