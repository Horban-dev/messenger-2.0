/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import Message from '../message/Message';
import msgs from './Messages.module.css';

const Messages = ({
  messages,
}) => (
    <div className={msgs.messages}>

    {
      messages.map((message) => (
          <>
          <Message
            key={message.id}
            text={message.text}
            isAnswer={message.authorId}
            date={message.date}
            />
          </>
      ))
    }

    </div>
);

export default Messages;
