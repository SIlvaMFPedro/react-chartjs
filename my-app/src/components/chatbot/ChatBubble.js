import React from 'react';

const ChatBubble = ({ message }) => {
  // Function to copy HTML content to clipboard
  const copyHTMLToClipboard = (htmlContent) => {
    // Create a temporary textarea element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = htmlContent;
    document.body.appendChild(tempTextArea);
  
    // Select the text
    tempTextArea.select();
  
    // Copy to clipboard
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
  };

  return (
    <div>
      {/* Display the chat bubble */}
      <div className="chat-bubble" onClick={() => copyHTMLToClipboard(message)}>
        {message}
      </div>
      {/* Optionally, you can add styling for the chat bubble */}
      <style jsx>{`
        .chat-bubble {
          padding: 10px;
          background-color: lightblue;
          border-radius: 5px;
          cursor: pointer;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default ChatBubble;
