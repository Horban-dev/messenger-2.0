import React from 'react';
import { dialogsData } from './data';
import main from './Main.module.css';
import ChatWindow from './components/chatwindow/ChatWindow';
import Sidebar from './components/sidebar/Sidebar';

const Main = () => (
    <div className={main.main}>
        <div className={main.container}>
            <Sidebar/>
            {dialogsData.map((item) => <ChatWindow
            key={item.id}
            headerLogo={item.headerLogo}
            chatAvatar={item.chatAvatar}
            headerName={item.headerName}
            messageInChat={item.messageInChat}
            myAnswer={item.myAnswer}
            />)
        }
        </div>
    </div>
);

export default Main;
