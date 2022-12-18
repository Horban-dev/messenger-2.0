/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react';
import classNames from 'classnames';
import { MY_ID } from '../../data';
import msg from './Message.module.css';

const Message = ({
  text, date, isMyAnswer, chatAvatar,
}) => {
  return (
      <div >
          {isMyAnswer == MY_ID
            ? <div className={classNames(msg.messageContent)}>
                    <p className={classNames(msg.messageContentP)}>{text}</p>
                    <span className={msg.messageContentS }>{date}</span>
              </div>
            : <div className={msg.messageInfo}>
              <img className={msg.avatar} src={chatAvatar} alt="avatar" />
              <div className={msg.messageSmsOnlineTime}>
                  <div className={msg.messageSms}>{text}</div>
                  <span className={msg.span}>{date}</span>
              </div>
          </div>}
      </div>
  );
};

export default Message;
