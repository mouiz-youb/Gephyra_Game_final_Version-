// import React from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
// import Score from './pages/Score'
import Login from './pages/Login'
import QRCodeForPrinting from './pages/QrcodeForPrinting'
import AnimateOne from './Components/AnimateOne'
import Test from './Components/Test'
import Test2 from './pages/Test2'
function App() {
  
  return (
    <div className='flex justify-center items-center h-screen w-screen flex-col gap-5 overflow-hidden'>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Test2/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/score' element={<AnimateOne/>}/>
        <Route path='/qrcode' element={<QRCodeForPrinting/>}/>
      </Routes>
    </div>
  
  )
}

export default App