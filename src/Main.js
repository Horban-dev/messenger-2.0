import React from 'react';
import main from './Main.module.css';
import Sidebar from './components/sidebar/Sidebar';

const Main = () => (
    <div className={main.main}>
        <div className={main.container}>
            <Sidebar/>
        </div>
    </div>
);

export default Main;
