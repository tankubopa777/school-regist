import './App.css';
import Login_page from './page/Login.js';
import Teacher from './page/Teacher';
import Student3 from './page/Student3';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useAsyncError } from "react-router-dom";
import { fetchSubjects } from './dataFetch.js'
import ElectiveSubject from './page/ElectiveSubject';
import GroupSubject from './page/GroupSubject';

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