import { useState } from "react"
import Message from "./Message";


function Messages () {

    const [messages, setMessages] = useState([]);

    return <div>
        {messages.forEach((message)=>{
            <Message message={message}/>
        })}
    </div>
}

export default Messages;