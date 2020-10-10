import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import logo from '../image/com1.png'

function Chat() {

  useEffect(() => {
    addResponseMessage('Welcome to Home 1800!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <div className="Chat">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Home 1800"
        subtitle="Join and Talk !!"
      />    
    </div>
  );
}

export default Chat;