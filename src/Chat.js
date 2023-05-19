import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';

function Chat() {
  return (
    <div className='chat'>
        <ChatHeader />

        <div className="chat__messages">
            <Message />
        </div>

        <div className="chat__input">
            <form>
                <input placeholder='Message Channel'/>
                <button type='submit'/>
            </form>
        </div>
    </div>
  )
}

export default Chat