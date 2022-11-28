import React from 'react';
import msg from './Message.module.css';

const Message = ({
  chatAvatar, messageInChat, myAnswer,
}) => (

        <div className="messege owner">
            <div className={msg.messageInfo}>
                <img className={msg.avatar} src={chatAvatar} alt="" />
                <div className={msg.messageSmsOnlineTime}>
                    <div className={msg.messageSms}>{messageInChat}</div>
                    <span className={msg.span}>24.10.21</span>
                </div>
            </div>
            <div className={msg.messageContent}>
                <p className={msg.messageContentP}>{myAnswer}</p>
                <span className={msg.messageContentS }>12.12.2012</span>
            </div>
        </div>
);

export default Message;
