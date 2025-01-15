import { useState } from "react";


function ChatInput( {sendMessageToServer} ) {

    const handleOnChange = (event) => {
        console.log(event);
        setMessage(event.target.value);
    }

    const [message, setMessage] = useState('');

    const sendMessage = (event) => {
        if(message === '') return;
        sendMessageToServer(message);
        setMessage('');
    }

    return <div className="flex  border-t-2 border-black">
        <input
            className="px-4 py-2 w-full rounded-bl-xl"
            id="user_message"
            placeholder="Enter your message here"
            value={message}
            // onKeyDown={handleKeyDown}
            onChange={handleOnChange}
        />
        <button 
            onClick={sendMessage}
            className="px-2 py-1 bg-blue-500 text-white rounded-br-md hover:bg-blue-700">Send</button>
    </div>
}

export default ChatInput;