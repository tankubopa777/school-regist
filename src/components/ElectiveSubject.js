import React from "react";
import ElectiveSubject from "./ElectiveDetail";

export default function ElectiveDetail(props) {
    const subjects = Object.values(props.subjects);
    console.log("detail");
    return (
        <div>    
         {subjects.map((subject, index) => (
          <div>
          <ElectiveSubject
            key={index}
            item={subject}
          />
          </div>
          ))}
        </div>
      )
    }