import { useEffect, useState } from "react"
import Message from "./Message";
import { v4 as uuidv4} from 'uuid';


function Messages () {

    const [messages, setMessages] = useState([]);

    useEffect(()=> {
        setMessages([
            "Test",
            "Test2",
            "Test3"
        ])
    },[])

    return <div className="min-h-96">
        {messages.map((message)=>
            <Message 
                key={uuidv4()}
                message={message}/>
        )}
    </div>
}

export default Messages;