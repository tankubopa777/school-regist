import React from "react";
import ChumDetail from "./ChumDetail";

export default function ChumSubject(props) {
    const subjects = Object.values(props.subjects);

    let chumSubject = [];

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].SUB_TYPE === "CHUM") {
          subjects[i]["CELLIDX"] = subjects.indexOf(subjects[i])
          chumSubject.push(subjects[i]);
        }
    }

    return (
        <div>
         {chumSubject.map((subject, index) => (
          <div>
          <ChumDetail
            key={index}
            item={subject}
            user={props.user}
            updateUser={props.updateUser}
          />
          </div>
          ))}
        </div>
      )
    }