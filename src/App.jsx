import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import SideCart from './components/SideCart/SideCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header></Header>
      <hr></hr>
      <div className="main flex justify-between">
        <div className="cart-container">
          <Cart></Cart>
        </div>
        <div className="sideCart">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
