import React from 'react'
import './ChatHeader.css'

function ChatHeader() {
  return (
    <div className='chatHeader'>
        <h3>
            <span className='chatHeader__hash'>#</span>
            ChannelName
        </h3>
    </div>
  )
}

export default ChatHeader