import { useState } from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import { Routes,Route } from 'react-router'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/checkout' element={<div>Hi</div>} />
    </Routes>
    
  )
}

export default App
