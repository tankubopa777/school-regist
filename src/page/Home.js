import Block_subject from '../components/Block_Subject';
import Navbar from '../components/navbar';
import React from 'react';
import Block_DetailStd from '../components/Block_DetailStd';
import Std1 from '../components/std1';
import Desc1 from '../components/desc1'
import './style.css'

export default function Home_page() {
    return (
        <div>
            <div class=""><Navbar /></div>
            <div class="relative top-20">
                <div class="hidden tablet:block fixed right-0">
                    <Block_DetailStd />
                </div>

                <div id="home" class="">
                    <Std1 />
                </div>
            </div>
        </div>

    );
}