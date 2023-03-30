import React from "react";
import FreeDetail from "./FreeDetail";

export default function ElectiveDetail(props) {
    const subjects = Object.values(props.subjects);

    let freeSubject = [];

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].SUB_TYPE === "FREE") {
            freeSubject.push(subjects[i]);
        }
    }

    return (
        <div>
         {freeSubject.map((subject, index) => (
          <div>
          <FreeDetail
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