import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import SideCart from './components/SideCart/SideCart'

function App() {
  const [readTime, setReadTime] = useState("");

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem('readTime', sum);
      setReadTime(sum);
    } else {
      localStorage.setItem('readTime', time);
      setReadTime(time)
    }
  };
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header></Header>
      <hr></hr>
      <div className="main md:flex justify-between">
        <div className="cart-container">
          <Cart handleReadTime={handleReadTime}></Cart>
        </div>
        <div className="sideCart">
          <SideCart readTime={readTime}></SideCart>


        </div>
      </div>
    </div>
  )
}

export default App
