import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl text-white font-bold'>Auth-Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App