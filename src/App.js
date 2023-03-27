import Login_page from './page/Login.js';
import Home from './page/Home';
import { useState, useEffect } from 'react'
import { username } from './page/Login.js'
import { hookUser } from './dataFetch.js'
import { page } from './store.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const callUser = async () => {
//     let data = await hookUser()
//     return data;
//   }

export default function App() {

    // const [user, setUser] = useState(null);

    // callUser().then((response) => {
    //     setUser(response["40527"])
    // });
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login_page />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );

}
