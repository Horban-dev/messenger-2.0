import React from 'react';
import Navbar from '../navbar/Navbar';
import ChatList from '../chat_lists/ChatList';
import sdbar from './Sidebar.module.css';

const Sidebar = () => (
        <div className={sdbar.sidebar}>
            <Navbar/>
            <ChatList/>
        </div>
);

export default Sidebar;
