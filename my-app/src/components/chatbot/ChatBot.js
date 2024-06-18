import React, {useState} from "react";
import copy from "clipboard-copy";
import './ChatBot.css';
import ChatBubble from "./ChatBubble";

const ChatBot = () => {
    
    return (
      <div>
        <h1>ChatBot example</h1>
        <div>
            {/* Example of using ChatBubble in application */}
            <ChatBubble message="<strong>Hello!<strong> How can i help you?"/>
            <ChatBubble message="<em>This is an example</em>"/>
            <ChatBubble message="This is a plain text message"/>
        </div>
      </div>
    );
};

export default ChatBot;