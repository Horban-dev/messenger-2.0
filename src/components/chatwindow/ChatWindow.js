import React from 'react';
import Messages from '../messages/Messages';
import Input from '../input/Input';
import chatWindow from './ChatWindow.module.css';

function ChatWindow({
  headerLogo, headerName, chatAvatar, messageInChat, myAnswer,
}) {
  return (
      <div className={chatWindow.chat}>
              <div className={chatWindow.chat_header}>
                  <img className={chatWindow.avatar} src={headerLogo} alt="avatar_alt" />
                  <span className={chatWindow.name}>{headerName}</span>
              </div>
              <Messages chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/>
              <Input />
          </div>
  );
}

export default ChatWindow;