import React from "react";
import ChumDetail from "./ChumDetail";

export default function ChumSubject(props) {
  const subjects = Object.values(props.subjects);
  const specialRoom = ["IEP", "IEP1", "IEP2", "IEP3", "EP", "EP1", "EP2", "EP3"]
  let chumSubject = [];
  let check = 0;

  for (let i = 0; i < subjects.length; i++) {

    if (subjects[i].SUB_TYPE === "CHUM" && subjects[i].AVAILABILITY) {
      subjects[i]["CELLIDX"] = subjects.indexOf(subjects[i])
      check = 0;

      if(subjects[i].SUB_PERM.includes(props.user.STD_CLASS) && (subjects[i].SUB_PERM.includes(7))){
        check = 1;
      }
      else if(subjects[i].SUB_PERM.includes(props.user.STD_CLASS) && !(subjects[i].SUB_PERM.includes(7))){
        check = 2;
      }
      
      if(check == 1 && specialRoom.includes(props.user.STD_ROOM)){
        chumSubject.push(subjects[i]);
      }
      else if(check == 2 && !(specialRoom.includes(props.user.STD_ROOM))){
        chumSubject.push(subjects[i]);
      }

      if(check == 2 && specialRoom.includes(props.user.STD_ROOM)){
        chumSubject.push(subjects[i]);
      }
      
    }
  }
  console.log(chumSubject)
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