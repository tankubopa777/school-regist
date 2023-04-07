const url = "https://script.google.com/macros/s/AKfycbzM7N4fk2Ri0G5SGN13Thk8gzGbTcbWutiEK-7pMqTeByDxsp19u9r-NO4oCvUK2Iii6w/exec"

export async function hookUsers() {
    const action = 'getUsers';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction);
    const result = await res.json();
    return result;
}

export async function hookSubjects() {
    const action = 'getSubjects';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction);
    const result = await res.json();
    return result;
}

export async function addSubjet(data) {
    // {  this is how parameter should look like
    //     "SUB_TYPE"  :"CHUM",
    //     "SUB_ID"    :"asdasd",
    //     "SUB_NAME"  :"วิทยาศาสตร์ในนรก",
    //     "SUB_CAP"   :45,
    //     "SUB_PERM"  :[2,4],
    //     "SUB_PROF"  :["prof1","prof2"],
    //     "SUB_ADDR"  :123,
    //     "STD"       :[]
    // }
    const action = 'addSubjects';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain',
              }
        }
    )
    return res;

}

export async function editSubject(data) {
    // { this is how parameter should look like
    //     "cell_idx"   :3,
    //     "SUB_TYPE"  :"da",
    //     "SUB_ID"    :"XS512",
    //     "SUB_NAME"  :"EXTRA SMALL",
    //     "SUB_CAP"   :12,
    //     "SUB_PERM"  :[5,6],
    //     "SUB_PROF"  :["profx","profy"],
    //     "SUB_ADDR"  :125
    // }
    const action = 'editSubject';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain',
              }
        }
    )
    return res;

}

export async function editPassword(data) {
    // { this is how parameter should look like
    //     "cellidx"  :2,
    //     "newpass"    :"asdws"
    // }
    const action = 'editPW';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain',
              }
        }
    )
    return res;
}

export async function editStdGrade(data) {
    // { this is how parameter should look like
    //     "cellidx":2,
    //     "std": [{"ID":40527,"FNAME":"asd","LNAME":"ASD","CLASS":1,"ROOM":2,"GRADE":0}
    //            ,{"ID":40528,"FNAME":"asd2","LNAME":"ASD2","CLASS":1,"ROOM":3,"GRADE":0}]
    // }
    const action = 'editStdGrade';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain',
              }
        }
    )
    return res;
}

export async function stdJoin(data) {
    // { this is how parameter should look like
    //     "cellidx": 2,
    //     "std": {"ID":40527,"FNAME":"asd","LNAME":"ASD","CLASS":1,"ROOM":2,"GRADE":0}
    // }
    const action = 'stdJoin';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain',
              }
        }
    )
    return res;
}

export async function addSubIntoSTD(data) {
    // {
    //     "cell_idx": 4,
    //     "CHUM": [],
    //     "FREE": [
    //         {
    //             "SUB_TYPE": "FREE",
    //             "SUB_ID": "XS512",
    //             "SUB_NAME": "EXTRA SMALL",
    //             "SUB_CAP": 12,
    //             "SUB_PERM": [
    //                 1,
    //                 2,
    //                 3
    //             ],
    //             "SUB_PROF": [
    //                 "profx",
    //                 "profy"
    //             ],
    //             "SUB_ADDR": 125,
    //             "STD": [
    //                 {
    //                     "ID": 40527,
    //                     "FNAME": "Inthat",
    //                     "LNAME": "ASD",
    //                     "CLASS": 1,
    //                     "ROOM": 2,
    //                     "GRADE": 80
    //                 },
    //                 {
    //                     "ID": 40528,
    //                     "FNAME": "asd2",
    //                     "LNAME": "ASD2",
    //                     "CLASS": 1,
    //                     "ROOM": 3,
    //                     "GRADE": 0
    //                 }
    //             ],
    //             "AVAILABILITY": "false",
    //             "CELLIDX": 1
    //         }
    //     ]
    // }

    const action = 'addSubIntoSTD';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain',
              }
        }
    )
    return res;
}

const callUser = async () => {
    let data = await hookUsers()
    return data;
}

const callSubjects = async () => {
    let data = await hookSubjects()
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

export async function fetchSubjects() {
    const response = await callSubjects();
    return response;
}

export async function fetchUsers() {
    const response = await callUser();
    return response;
}

export function checkLogin(username, passw) {
    return callUser().then((response) => {
        if (!(username in response) || response[username].PASSW != passw) {
            return false;
        } else {
            return [true, response[username]];
        }
    });
}

