import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "yash",
    age: 21
  }

  let newArray = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username = "chai or code" btnText = "Click Me"/>
    <Card username = "coffee or code" btnText = "Visit Me"/>

    </>
  )
}

export default App
