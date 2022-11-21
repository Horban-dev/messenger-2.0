import React from 'react';
import sdbar from './Sidebar.module.css';
import Navbar from '../navbar/Navbar';
import ChatList from '../chat_lists/ChatList';

const Sidebar = () => (
        <div className={sdbar.sidebar}>
            <Navbar/>
            <ChatList/>
        </div>
);

export default Sidebar;
