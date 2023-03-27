import Block_subject from '../components/Block_Subject';
import Navbar from '../components/Navbar';
import React from 'react';
import Block_DetailStd from '../components/Block_DetailStd';
import Std1 from '../components/std1';
import Desc1 from '../components/desc1'
import './style.css'

export default function Home_page(props) {
    return (
        <div>
            <Navbar
                user={props.user} updateUser={props.updateUser}
                isLoggedIn={props.isLoggedIn} updateIsLoggedIn={props.updateIsLoggedIn} />
            <Block_DetailStd />
            <Std1 />
        </div >

    );
}