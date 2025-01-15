import ChatInput from "./chatbot-ui/ChatInput";
import Header from "./chatbot-ui/Header";
import Messages from "./chatbot-ui/Messages";


function ChatBot ({className}){

    const sendMessageToServer = () => {
        // api call
    }

    return <div className={className}>
        <Header/>
        <Messages/>
        <ChatInput sendMessageToServer={sendMessageToServer}/>
    </div>

}

export default ChatBot;