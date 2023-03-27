import Login_page from './page/Login.js';
import Home from './page/Home';
import { useState, useEffect } from 'react'
import { username } from './page/Login.js'
import { hookUser } from './dataFetch.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const callUser = async () => {
//     let data = await hookUser()
//     return data;
//   }

export default function App() {

    

    // callUser().then((response) => {
    //     setUser(response["40527"])
    // });
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
