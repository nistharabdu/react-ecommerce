import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Body } from './components/body/Body'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { CartPage } from './components/cart/CartPage'
import { Checkout } from './components/checkout/Checkout'

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <Router>
        <div className='main-container flex-column'>
          <Header setSearchValue={setSearchValue}/>
          <div className='flex-fill w-100'>
            <Routes>
              <Route path="/" element={<Body searchValue={searchValue} />}/>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
