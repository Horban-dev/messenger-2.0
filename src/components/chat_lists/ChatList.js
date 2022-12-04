import React from 'react';
import Persons from '../persons/Persons';
import { chatsData } from '../../data';
import chatLi from './ChatList.module.css';

const ChatList = ({ onChoseDialog }) => (
        <div className={chatLi.chats}>
            <h1 className={chatLi.chats_title}>Chats</h1>
            <div>
            {chatsData.map((item) => <Persons
                        pics={item.pics}
                        nick={item.nick}
                        text={item.text}
                        date={item.date}
                        onChoseDialog={onChoseDialog}
                        id={item.id}
                        key={item.id}
                    />)
            }
            </div>
        </div>
);

export default ChatList;
