import './App.css';
import Login_page from './page/Login.js';
import Home from './page/Home';
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
                <Route path="/Home" element={<Home
                    user={user} updateUser={updateUser}
                    isLoggedIn={isLoggedIn} updateIsLoggedIn={updateIsLoggedIn} />} />
            </Routes>
        </Router>
    );

}
