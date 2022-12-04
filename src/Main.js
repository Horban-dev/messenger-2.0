/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ChatWindow from './components/chatwindow/ChatWindow';
import Sidebar from './components/sidebar/Sidebar';
import { dialogsData } from './data';
import main from './Main.module.css';

const Main = () => {
  const [choosenDialog, setChoosenDialog] = useState(1);

  return (
        <div className={main.main}>
        <div className={main.container}>
            <Sidebar onChoseDialog={setChoosenDialog}/>
            <ChatWindow chat={dialogsData[choosenDialog]} />
        </div>
    </div>
  );
};

export default Main;
