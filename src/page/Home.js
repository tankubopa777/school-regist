import Block_subject from '../components/Block_Subject';
import Navbar from '../components/Navbar';
import React from 'react';
import Block_DetailStd from '../components/Block_DetailStd';
import Std1 from '../components/std1';
import Desc1 from '../components/desc1'
import './style.css'

export default function Home_page() {
    return (
        <div>
            <Navbar />
                <div class="hidden tablet:block fixed right-0">
                    <Block_DetailStd />
                </div>

                <div id="home">
                    <Std1 />
                    <Desc1 />
                    <Std1 />
                    <Desc1 />
                    <Std1 />
                    <Desc1 />
                    <Std1 />
                    <Desc1 />
                    <Std1 />
                    <Desc1 />
                    <Std1 />
                    <Desc1 />
                </div>
            </div>

    );
}