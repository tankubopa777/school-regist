import './App.css';
import Login_page from './page/Login.js';
import Ajarn from './page/Ajarn';
import Student1 from './page/Student1';
import Student2 from './page/Student2';
import Student3 from './page/Student3';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const updateIsLoggedIn = (newValue) => {
        setIsLoggedIn(newValue);
    };

    const updateUser = (newValue) => {
        setUser(newValue);
    };

    console.log(isLoggedIn)
    console.log(user)
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login_page
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn} />} />
                <Route path="/วิชาเสรี" element={<Student1
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn} />} />
                <Route path="/วิชาชุมนุม" element={<Student2
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn} />} />
                <Route path="/วิชาที่ลงทะเบียนเเล้ว" element={<Student3
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn} />} />
                <Route path="/PROF" element={<Ajarn
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn} />} />
            </Routes>
        </Router>
    );

}
