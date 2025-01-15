// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import BotButton from './components/chatbot-ui/BotButton';
import ChatBot from './components/ChatBot';

function App() {

  const [chatBotIsOpen, setChatBotOpen] = useState(false);

  const handleBotButtonClick = (event) => {
    setChatBotOpen(!chatBotIsOpen);
  }

  return (
    <div className="relative z-0">
      Hello
      {chatBotIsOpen && <ChatBot
        className="" />}
      <BotButton
        className="bg-blue-900 rounded-full p-5 w-16 z-10 fixed right-10 bottom-10"
        onClick={ (e) => handleBotButtonClick(e)}
      />
    </div>
  );
}

export default App;
