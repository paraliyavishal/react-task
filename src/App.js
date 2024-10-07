import React from 'react'
import Number from './usestate/Number'
import HideShow from './usestate/HideShow'
import FormHandel from './usestate/FormHandel'
import LoginForm from './usestate/LoginForm'
import SwitchBetween from './usestate/SwitchBetween'
import LikeButton from './usestate/LikeButton'
import TodoList from './usestate/TodoList'
import CharacterCount from './usestate/CharacterCount'
import ShopingCart from './usestate/ShopingCart'
import FetchData from './usestate/FetchData'
import WindowWidth from './usestate/WindowWidth'
import SwitcherLocalStorage from './usestate/SwitcherLocalStorage'
import PollingData from './usestate/PollingData'
import TimerComponent from './usestate/TimerComponent'
import CreateTimer from './usestate/CreateTimer'
import CountDown from './usestate/CountDown'
import OnlineStatus from './usestate/OnlineStatus'
import Form1 from './formhandling/Form1'
import Form2 from './formhandling/Form2'

function App() {
  return (
    <div>
      <Number />
      <FormHandel /> 
      <HideShow />
      <LoginForm />
      <SwitchBetween />
      <LikeButton /> 
      <TodoList />
      <CharacterCount /> 
      <TimerComponent />
      <FetchData />
      <WindowWidth />
      <ShopingCart /> 
      <SwitcherLocalStorage />
      <OnlineStatus />
      <CreateTimer />
      <PollingData />
      <CountDown />

      <Form1 />
      <Form2 />
    </div>
  )
}

export default App
