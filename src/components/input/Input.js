import React from 'react';
import input from './Input.module.css';

function Input() {
  return (
            <div className={input.input_sms}>
            <input
                className={input.input}
                type="text"
                placeholder='Сообщение...'
                />
            <button className={input.button}>Ok</button>
        </div>
  );
}

export default Input;
