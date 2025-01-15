import { useState } from "react";


function ChatInput() {

    const handleKeyDown = (event) => {
        console.log(event);
    }

    const handleOnChange = (event) => {
        console.log(event);
    }

    const [message, setMessage] = useState('');

    return <div>
        <input 
            id="user_message"
            placeholder="Enter your message here"
            value={message}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
            />
    </div>
}

export default ChatInput;