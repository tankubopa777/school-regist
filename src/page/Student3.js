import Block_subject from '../components/Block_Subject';
import Navbar from '../components/Navbar';
import React from 'react';
import Block_DetailStd from '../components/Block_DetailStd';
import Std3 from '../components/std3';
import './style.css'

export default function Home_page(props) {
    return (
        <div>
            <Navbar
                user={props.user} updateUser={props.updateUser}
                isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
            <div class="relative top-28">
                <div class="hidden tablet:block fixed right-0">
                    <Block_DetailStd user={props.user} />
                </div>
                <div id="home" class="relative">
                    <Std3 />
                </div>
            </div>

        </div >

    );
}