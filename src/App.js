import './App.css';
import Login_page from './page/Login.js';
import Teacher from './page/Teacher';
import Student1 from './page/Student1';
import Student2 from './page/Student2';
import Student3 from './page/Student3';
import Edit from './PageTeacher/Edit';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useAsyncError } from "react-router-dom";
import { fetchSubjects } from './dataFetch.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIwdL2S-oHhqVYYiUoV_1i8ZGzqx0A5W4",
  authDomain: "pks-register-5580c.firebaseapp.com",
  projectId: "pks-register-5580c",
  storageBucket: "pks-register-5580c.appspot.com",
  messagingSenderId: "369398019644",
  appId: "1:369398019644:web:ce3f5f01738a7dc472f539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [page, setPage] = useState('Login');
    const [subjects, setSubjects] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
          fetchSubjects().then((response) => {
            setSubjects(response);
          }).catch((error) => {
            console.log(error);
          });
        }, 2000);
      
        return () => clearTimeout(timer);
      }, []);

    const updateIsLoggedIn = (newValue) => {
        setIsLoggedIn(newValue);
    };

    const updateUser = (newValue) => {
        setUser(newValue);
    };

    const updatePage = (newValue) => {
        setPage(newValue);
    };

    const updateSubjects = (newValue) => {
        setSubjects(newValue);
    };

    console.log(isLoggedIn)
    console.log(user)
    console.log(subjects)

    
 
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login_page
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/วิชาเสรี" element={<Student1
                     user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/วิชาชุมนุม" element={<Student2
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/วิชาที่ลงทะเบียนเเล้ว" element={<Student3
                    user={user}             updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page}             updatePage={updatePage}
                    subjects={subjects}     updateSubjects={updateSubjects} />} />
                <Route path="/Teacher" element={<Teacher
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page} updatePage={updatePage}
                    subjects={subjects} updateSubjects={updateSubjects} />} />
            </Routes>
        </Router>
    );

}