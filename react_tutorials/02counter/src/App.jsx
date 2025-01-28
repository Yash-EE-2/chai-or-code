import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  const addValue =()=>{
    counter = counter+1
    console.log("clicked",counter);
   setCounter(counter)
  }

  const removeValue =()=>{
    if(counter>0){
      counter = counter-1
      console.log("clicked",counter);
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>


    <button
    onClick={addValue}
    >Add Value</button>

    <br />
    <br />

    <button onClick = {removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
