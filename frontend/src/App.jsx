// import React, { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from'./pages/PlaceOrder/PlaceOrder'
// import { Footer } from './components/Footer/Footer'

// import Loginpopup from './components/Loginpopup/LoginPopup'

// const App = () => {

//  const[showLogin,setShowLogin]=useState(false)
//   return (
//     <>
//   {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : null}

    
//     <div className='app'>
//    <Navbar setShowLogin={setShowLogin}/>
   
  
//    <Routes>
//     <Route path='/' element={<Home/>} />
//     <Route path='/cart' element={<Cart/>} />
//     <Route path='/order' element={<PlaceOrder/>}/>
//    </Routes>
//     </div>
//     <Footer/>

//     </>
//   )
// }

// export default App







import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Footer } from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'  // <- fix here

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
