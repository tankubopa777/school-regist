import './App.css';
import Login_page from './page/Login.js';
import Home from './page/Home';
import Teacher from './page/Teacher';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useAsyncError } from "react-router-dom";
import { fetchSubjects } from './dataFetch.js'


export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [page, setPage] = useState('Login');
    const [subjects, setSubjects] = useState(null);

    useEffect(() => {
        fetchSubjects().then((response) => {
            setSubjects(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [])

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
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page} updatePage={updatePage}
                    subjects={subjects} updateSubjects={updateSubjects} />} />
                <Route path="/Home" element={<Home
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page} updatePage={updatePage}
                    subjects={subjects} updateSubjects={updateSubjects} />} />
                <Route path="/Teacher" element={<Teacher
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn}
                    page={page} updatePage={updatePage}
                    subjects={subjects} updateSubjects={updateSubjects} />} />
            </Routes>
        </Router>
    );

}