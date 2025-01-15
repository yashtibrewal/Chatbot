import ChatInput from "./chatbot-ui/ChatInput";
import Header from "./chatbot-ui/Header";
import Messages from "./chatbot-ui/Messages";


function ChatBot (){

    return <div className="w-40">
        <Header/>
        <Messages/>
        <ChatInput/>
    </div>

}

export default ChatBot;