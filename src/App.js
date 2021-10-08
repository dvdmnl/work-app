import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {useInterval} from "./utils/hooks/useInterval";
import axios from "axios";
import ChetBox from "./components/ChetBox/ChetBox";

function App() {
  const [messages, setMessages] = useState([])

  useEffect( () => {

    async function fetchData() {
      const randomMessage = await axios.post('http://localhost:8080/api/ping_message')
      messages.push(randomMessage.data)
      setMessages(messages)
    }

    fetchData()

  },[])



  useInterval(async () => {
    const randomMessage = await axios.post('http://localhost:8080/api/ping_message')
    console.log(randomMessage.data)
    setMessages(oldArray => [...messages, randomMessage.data]);
  },1000)



  return (
    <div className="App">
      {messages.map((message) => {
        return (<ChetBox {...message}/>)
      })}
    </div>
  );
}

export default App;
