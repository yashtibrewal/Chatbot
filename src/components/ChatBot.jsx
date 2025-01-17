import { useEffect, useState } from "react";
import ChatInput from "./chatbot-ui/ChatInput";
import Header from "./chatbot-ui/Header";
import Messages from "./chatbot-ui/Messages";
import { getMessagesFromServer } from "./service";


function ChatBot ({className}){

    const sendMessageToServer = () => {
        // api call
    }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessagesFromServer().then((messages)=>{
            setMessages(messages);
        });
    },[]);

    return <div className={className}>
        <Header/>
        <Messages messages={messages}/>
        <ChatInput sendMessageToServer={sendMessageToServer}/>
    </div>

}

export default ChatBot;