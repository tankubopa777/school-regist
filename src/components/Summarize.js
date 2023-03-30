import { func } from "prop-types";
import React from "react";
import SummarizeDetail from "./SummarizeDetail";

export default function ElectiveDetail(props) {
    const user = Object.values(props)[0];

    let subject = [];

    if (user.FREE[0] !== undefined) {
        subject.push(user.FREE[0]);
    }
    if (user.CHUM[0] !== undefined) {
        subject.push(user.CHUM[0]);
    }

    function submit() {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(user)
        // };
        // fetch('http://localhost:5000/summarize', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        if(subject.length !== 0){
            alert("ลงทะเบียนเรียบร้อย");
            console.log("Success");
        } else {
            alert("กรุณาเลือกวิชา");
            console.log("No subject");
        }
    }

    return (
        <div>
         {subject.map((subject, index) => (
          <div>
          <SummarizeDetail
            key={index}
            item={subject}
            user={props.user}
            updateUser={props.updateUser}
          />
          </div>
          ))}
          <div className="w-5/6 tablet:w-1/2 flex justify-end mr-10 mt-10">
                <button id="btn" type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => submit()}>ลงทะเบียน</button>
            </div>
        </div>
      )
    }