import { func } from "prop-types";
import React, { useState } from "react";
import SummarizeDetail from "./SummarizeDetail";
import {addSubIntoSTD,stdJoin} from "../dataFetch"

export default function Summarize(props) {
    const user = Object.values(props)[0];
    let subject = [];
    const [submitState,setSubmitState] = useState("enable")

    if (user.FREE[0] !== undefined) {
        subject.push(user.FREE[0]);
    }
    if (user.CHUM[0] !== undefined) {
        subject.push(user.CHUM[0]);
    }

    function submit() {
        let datatosub1 = {};
        let datatosub2 = {};

        let datatostd = { "cell_idx": props.user.CELLIDX, "CHUM": props.user.CHUM, "FREE": props.user.FREE }
        addSubIntoSTD(datatostd);
        if(user.FREE[0] !== undefined && user.FREEREG == 0){
            datatosub1 = { "cellidx": user.FREE[0].CELLIDX + 2, "std": { "ID": user.ID, "FNAME": user.FNAME, "LNAME": user.LNAME, "CLASS": user.STD_CLASS, "ROOM": user.STD_ROOM, "GRADE": 0 } }
            stdJoin(datatosub1);
            props.updateUser({...user,FREEREG: 1})
        }
        if (user.CHUM[0] !== undefined && user.CHUMREG == 0){
            datatosub2 = { "cellidx": user.CHUM[0].CELLIDX + 2, "std": { "ID": user.ID, "FNAME": user.FNAME, "LNAME": user.LNAME, "CLASS": user.STD_CLASS, "ROOM": user.STD_ROOM, "GRADE": 0 } }
            stdJoin(datatosub2);
            props.updateUser({...user,CHUMREG: 1})
        }
        alert("ลงทะเบียนสำเร็จ")

    }

    return (
        <div>
         {subject.map((subject, index) => (
          <div key={index}>
          <SummarizeDetail
            item={subject}
            user={props.user}
            updateUser={props.updateUser}
            subjects={props.subjects}
          />
          </div>
          ))}
          <div className="w-5/6 tablet:w-1/2 flex justify-end mr-10 mt-10">
                <button id="btn" type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => submit()}>ลงทะเบียน</button>
            </div>
        </div>
      )
    }