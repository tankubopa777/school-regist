export async function hookUser() {
    const url = 'https://script.google.com/macros/s/AKfycbwCe11s89bwSy3g6qedTBktt6j7gwou3Wc7bItonos8PoSEZryJ1ODjXIDkLJb5L_52Pg/exec';
    const action = 'getUsers';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction);
    const result = await res.json();
    return result;
}

export async function hookSubjet() {
    const url = 'https://script.google.com/macros/s/AKfycbwCe11s89bwSy3g6qedTBktt6j7gwou3Wc7bItonos8PoSEZryJ1ODjXIDkLJb5L_52Pg/exec';
    const action = 'getSubjects';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction);
    const result = await res.json();
    return result;
}

const callUser = async () => {
    let data = await hookUser()
    return data;
}

// export function checkLogin(username,passw) {
//     callUser().then((response) => {
//         if (!(username in response) || response[username].PASSW != passw) {
//             console.log("failed")
//             return false
//         }
//         else {
//             console.log("pass")
//             return true
//         }
//     });

// }

export function checkLogin(username, passw) {
    return callUser().then((response) => {
        if (!(username in response) || response[username].PASSW != passw) {
            return false;
        } else {
            return true;
        }
    });
}



