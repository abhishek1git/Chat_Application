import React from 'react'
import  './App.css';
import { ChatEngine } from 'react-chat-engine'
import LoginForm from "./components/LoginForm"
import ChatFeed from './components/ChatFeed'
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
    height="100vh"
    projectID="9cf6e823-bfc3-4151-9154-7f859d6212fa"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatProps)=><ChatFeed {...chatProps}/>}
    />
  )
}

export default App