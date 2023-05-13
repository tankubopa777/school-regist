import React from "react";
import FreeDetail from "./FreeDetail";

export default function FreeSubject(props) {
    const subjects = Object.values(props.subjects);

    let freeSubject = [];

    for (let i = 0; i < subjects.length; i++) {

        if (subjects[i].SUB_TYPE === "FREE" && subjects[i].AVAILABILITY) {
            subjects[i]["CELLIDX"] = subjects.indexOf(subjects[i])
            for(let j = 0; j < subjects[i].SUB_PERM.length; j++){
                if(subjects[i].SUB_PERM[j] == props.user.STD_CLASS){
                  freeSubject.push(subjects[i]);
                }
            }
        }
    }
    console.log(subjects)

  return (
    <div>
      {freeSubject.map((subject, index) => (
        <FreeDetail
          key={index}
          item={subject}
          user={props.user}
          updateUser={props.updateUser}
        />
      ))}
    </div>
  )
}