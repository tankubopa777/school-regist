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

export async function addSubjet(new_subject_data) {
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
    const url = 'https://script.google.com/macros/s/AKfycbwCe11s89bwSy3g6qedTBktt6j7gwou3Wc7bItonos8PoSEZryJ1ODjXIDkLJb5L_52Pg/exec';
    const action = 'addSubjects';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            body: new_subject_data
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
    const url = 'https://script.google.com/macros/s/AKfycbwCe11s89bwSy3g6qedTBktt6j7gwou3Wc7bItonos8PoSEZryJ1ODjXIDkLJb5L_52Pg/exec';
    const action = 'editSubject';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            body: data
        }
    )
    return res;

}

export async function editPassword(data) {
    // { this is how parameter should look like
    //     "cellidx"  :2,
    //     "newpass"    :"asdws"
    // }
    const url = 'https://script.google.com/macros/s/AKfycbwCe11s89bwSy3g6qedTBktt6j7gwou3Wc7bItonos8PoSEZryJ1ODjXIDkLJb5L_52Pg/exec';
    const action = 'editPW';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            body: data
        }
    )
    return res;
}

export async function editStdGrade(data){
    // { this is how parameter should look like
    //     "cellidx":2,
    //     "std": [{"ID":40527,"GRADE":0} , {"ID":40528,"GRADE":80} ]
    // }
    const url = 'https://script.google.com/macros/s/AKfycbwCe11s89bwSy3g6qedTBktt6j7gwou3Wc7bItonos8PoSEZryJ1ODjXIDkLJb5L_52Pg/exec';
    const action = 'editStdGrade';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            body: data
        }
    )
    return res;
}

export async function stdJoin(data){
    // { this is how parameter should look like
    //     "cellidx": 2,
    //     "std": {"ID":"6410742297","GRADE":0}
    // }
    const url = 'https://script.google.com/macros/s/AKfycbw6IT2aAOUB1hcJNhTivDE3Dst9jHXzCcOPpXqdabTNy-2YJ26ZfGdmZphS8aVPfv5umA/exec';
    const action = 'stdJoin';
    const urlwithaction = url + '?action=' + action;
    const res = await fetch(urlwithaction,
        {
            method: "POST",
            body: data
        }
    )
    return res;
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
            return [true,response[username]];
        }
    });
}





