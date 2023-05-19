import React from 'react';
import './Message.css';
import { Avatar } from '@mui/material';

function Message() {
  return (
    <div className='message'>
        <Avatar />
        <div className="message__info">
            <h4>
                Jake Kenslow
                <span className="message__timestamp">today</span>
            </h4>
            <p>Hello World!</p>
        </div>
    </div>
  )
}

export default Message