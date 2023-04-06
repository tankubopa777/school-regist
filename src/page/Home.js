import Block_subject from '../components/Block_Subject';
import Navbar from '../components/Navbar';
import React from 'react';
import Block_DetailStd from '../components/Block_DetailStd';
import Std1 from '../components/std1';
import './style.css'

export default function Home_page(props) {
    return (
        <div>
            <Navbar
                user={props.user} updateUser={props.updateUser}
                isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
            <div className="relative top-28">
                <div className="hidden tablet:block fixed right-0">
                    <Block_DetailStd user={props.user} />
                </div>
                <div id="home" className="relative">
                    <Std1 />
                </div>
            </div>

        </div >

    );
}