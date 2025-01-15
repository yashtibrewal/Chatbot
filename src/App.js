// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import BotButton from './components/chatbot-ui/BotButton';
import ChatBot from './components/ChatBot';

function App() {

  const [chatBotIsOpen, setChatBotOpen] = useState(true);

  const handleBotButtonClick = (event) => {
    setChatBotOpen(!chatBotIsOpen);
  }

  return (
    <div className="">
      {chatBotIsOpen && <ChatBot
        className="fixed min-w-96 rounded-xl bottom-32 right-10 border-x-2 border-b-2 border-blue-500"
      />}
      <BotButton
        className="bg-blue-900 rounded-full px-5 py-2 z-10 fixed right-10 bottom-10 text-white"
        onClick={(e) => handleBotButtonClick(e)}
      />
    </div>
  );
}

export default App;
