import React from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Score from './pages/Score'

function App() {
  
  return (
    <div className='flex justify-center items-center h-screen w-screen flex-col gap-5'>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/score' element={<Score/>}/>
      </Routes>
    </div>
  
  )
}

export default App