import React from 'react';
import './css/App.css';
import SideBar from "./js/components/SideBar";
import ConversationList from "./js/components/conversation/ConversationList";
import ChatScreen from "./js/components/chat/ChatScreen";

function App() {
  return (
    <div className="App">

      <SideBar/>
      <ConversationList/>
      <ChatScreen chatName={"Mom'Discharge Plan"} />

    </div>
  );
}

export default App;
