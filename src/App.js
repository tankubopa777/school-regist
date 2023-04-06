import './App.css';
import Login_page from './page/Login.js';
import Teacher from './page/Teacher';

import Summarize from './page/Summarize';
import ElectiveSubject from './page/FreeSubject';
import GroupSubject from './page/ChumSubject';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useAsyncError } from "react-router-dom";
import { fetchSubjects , fetchUsers } from './dataFetch.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGqelfpqihqu3HhIqKQUWx5AX_oT8wnU8",
  authDomain: "register-pks.firebaseapp.com",
  projectId: "register-pks",
  storageBucket: "register-pks.appspot.com",
  messagingSenderId: "1034227295574",
  appId: "1:1034227295574:web:57c7b4a35924f128aa62f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [page, setPage] = useState('Login');
    const [subjects, setSubjects] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
      const interval = setInterval(() => {
        fetchSubjects()
          .then(response => {
            setSubjects(response);
          })
          .catch(error => {
            console.log(error);
          });

        fetchUsers()
          .then(response => {
            setUsers(response);
          })
          .catch(error => {
            console.log(error);
          });
        
      }, 2000);
    
      return () => clearInterval(interval);
    }, []);


    const updateIsLoggedIn = (newValue) => {
        setIsLoggedIn(newValue);
    };

    const updateUser = (newValue) => {
        setUser(newValue);
    };

    const updateUsers = (newValue) => {
        setUsers(newValue);
    };

    const updatePage = (newValue) => {
        setPage(newValue);
    };

    const updateSubjects = (newValue) => {
        setSubjects(newValue);
    };

    // console.log(isLoggedIn)
    // console.log(user)
    // console.log(subjects)
    // console.log(users)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login_page
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/วิชาเสรี" element={<ElectiveSubject
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/วิชาชุมนุม" element={<GroupSubject
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/วิชาที่ลงทะเบียนเเล้ว" element={<Summarize
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/Teacher" element={<Teacher
                    users={users} updateUsers={updateUsers}
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page} updatePage={updatePage}
                    subjects={subjects} updateSubjects={updateSubjects} />} />
            </Routes>
        </Router>
    );

}