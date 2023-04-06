import { func } from "prop-types";
import React from "react";
import SummarizeDetail from "./SummarizeDetail";
import {addSubIntoSTD,stdJoin} from "../dataFetch"

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
        let datatosub = {};
        let check = 0;

        if(subject.length !== 0){
            alert("ลงทะเบียนเรียบร้อย");

            let datatostd = {"cell_idx":props.user.CELLIDX,"CHUM":props.user.CHUM,"FREE":props.user.FREE}
            addSubIntoSTD(datatostd);

            for(let i=0;i<subject.length;i++){
                check = 0

                for(let j=0;j<subject[i].STD.length;j++)
                    if(subject[i].STD[j].ID == props.user.ID){
                        check += 1;
                    }

                if(check == 0){
                    datatosub = {"cellidx":subject[i].CELLIDX+2,"std":{"ID":user.ID,"FNAME":user.FNAME,"LNAME":user.LNAME,"CLASS":user.STD_CLASS,"ROOM":user.STD_ROOM,"GRADE":0}}
                    stdJoin(datatosub);
                }
                
            }

            console.log(subject)
            console.log(user)
            console.log(datatostd)
            console.log(datatosub)
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