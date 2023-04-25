import Navbar from '../components/Navbar';
import React from 'react';
import ResetPasswd from '../components/ResetPassword';
import './style.css';

export default function Home_page(props) {
    return (
        <div>
            <Navbar
                user={props.user} updateUser={props.updateUser}
                isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
            <div className="relative top-28">
                <div id="home" className="relative">
                    <ResetPasswd user={props.user} updateUser={props.updateUser}/>
                </div>
            </div>

        </div >
    );
}