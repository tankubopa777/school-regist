import Navbar from '../components/Navbar';
import React from 'react';
import Block_DetailStd from '../components/Block_DetailStd';
import ElectiveDetail from '../components/FreeSubject';
import './style.css'
import { useState, useEffect } from 'react'
import { redirect, useNavigate, useHistory } from 'react-router-dom';

export default function ElectiveSubjectPage(props) {

    return (
        <div>
            <Navbar
                user={props.user} updateUser={props.updateUser}
                isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />

            <div className="relative top-28">
            <label className='laptop:text-3xl
                 tablet:text-2xl
                 mobile:text-xl
                 px-5 font-bold text-gray-700 uppercase tracking-wide'>
                    รายชื่อวิชาเลือกเสรี
                </label>
                <div className="hidden laptop:block fixed right-0 pt-2">
                    <Block_DetailStd user={props.user} />
                </div>
                <div id="home" className="relative top-5">
                        <ElectiveDetail 
                        subjects={props.subjects} user={props.user} updateUser={props.updateUser} />   
                </div>
            </div>

        </div >

    );
}