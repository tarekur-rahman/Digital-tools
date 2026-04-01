
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Card from './component/Card'
import Carddata from './component/Carddata'
import Counter from './component/Counter'
import Nav from './component/Nav'

 const fetchCard = async ()=>{
    const res = await fetch("/data.json");
    return res.json();
  }

  const promiseCard = fetchCard();

function App() {
  const [active, setActive] = useState("select");  

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Counter></Counter>
    <Carddata active={active} setActive={setActive} ></Carddata>
    <Card active={active} promiseCard={promiseCard} />

    </>
  )
}

export default App
