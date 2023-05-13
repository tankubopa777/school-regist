import React from "react";
import ChumDetail from "./ChumDetail";

export default function ChumSubject(props) {
    const subjects = Object.values(props.subjects);

    let chumSubject = [];

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].SUB_TYPE === "CHUM" && subjects[i].AVAILABILITY) {
          subjects[i]["CELLIDX"] = subjects.indexOf(subjects[i])
          if (!(props.user.STD_CLASS == subjects[i].SUB_PERM[0]) || (props.user.STD_CLASS == subjects[i].SUB_PERM[1]) || (props.user.STD_CLASS == subjects[i].SUB_PERM[2]) || (props.user.STD_CLASS == subjects[i].SUB_PERM[3]) || (props.user.STD_CLASS == subjects[i].SUB_PERM[4]) || (props.user.STD_CLASS == subjects[i].SUB_PERM[5])) {
            continue;
          }
          else{
            chumSubject.push(subjects[i]);
          }
        }
    }

    return (
        <div>
         {chumSubject.map((subject, index) => (
          <ChumDetail
            key={index}
            item={subject}
            user={props.user}
            updateUser={props.updateUser}
          />
          ))}
        </div>
      )
    }