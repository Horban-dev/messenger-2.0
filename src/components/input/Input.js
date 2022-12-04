/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import input from './Input.module.css';

function Input() {
  const [activeBtn, setActiveBtn] = useState(true);
  const [inputLength, setInputLength] = useState('');

  useEffect(() => {
    inputLength.length > 0 ? setActiveBtn(false) : setActiveBtn(true);
  }, [inputLength]);

  return (
          <div className={input.input_sms}>
            <input
                className={input.input}
                value={inputLength}
                onChange={(e) => setInputLength(e.target.value)}
                type="text"
                placeholder='Сообщение...'
                />
            <button disabled={activeBtn} className={input.button}>Send</button>
        </div>
  );
}

export default Input;
