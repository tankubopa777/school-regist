import React from "react";
import GroupDetail from "./GroupDetail";

export default function GroupSubject(props) {
    const subjects = Object.values(props.subjects);
    console.log("detail");
    return (
        <div>    
         {subjects.map((subject, index) => (
          <div>
          <GroupDetail
            key={index}
            item={subject}
          />
          </div>
          ))}
        </div>
      )
    }