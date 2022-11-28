import React from 'react';
import Message from '../message/Message';
import msgs from './Messages.module.css';

const Messages = ({
  chatAvatar, messageInChat, myAnswer,
}) => (
        <div className={msgs.messages}>
            <Message chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/>
        </div>
);

export default Messages;
