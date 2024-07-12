import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from "./components/LoginForm.jsx";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="59e056a9-2f7e-44bd-9f7f-05d6d73d988d"
        userName="grop"
        userSecret="qwerty"
        renderChatFeed = {(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App
