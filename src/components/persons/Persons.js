import React from 'react';
import pers from './Persons.module.css';

const Persons = ({
  pics, nick, text, date, onChoseDialog, id,
}) => (
        <div onClick={() => onChoseDialog(id)} >
            <div className={pers.dialogs}>
                <img className={pers.avatar} src={pics} alt="avatar" />
                <div>
                    <div className={pers.name}>{nick}</div>
                    <span className={pers.last_sms}>{text}</span>
                </div>
                <p className={pers.chats_date}>{date}</p>
            </div>
            <div className={pers.divider}></div>
        </div>
);

export default Persons;
