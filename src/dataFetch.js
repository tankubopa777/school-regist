export async function hookUser(){
    const url = 'https://script.google.com/macros/s/AKfycbzk_oFoKGv9lt78QRxxRIHwb1YjcW2yHg6ha-msNZwRAslRW4ja0Xok4WsHClAfpdfNNw/exec';
    const action = 'getUsers';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction);
    const result = await res.json();
    return result;
}

export async function hookSubjet(){
    const url = '';
    const action = 'getSubjects';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction);
    const result = await res.json();
    return result;
}

export function getUserDataById(id,data){
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
    }
}



