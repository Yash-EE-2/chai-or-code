import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ab consequuntur reiciendis cum deserunt debitis quam. Placeat, ex dolores! Expedita consequuntur aspernatur, voluptates voluptatem doloremque natus quas explicabo voluptas accusantium.</h1>
    </>
  )
}

export default App
