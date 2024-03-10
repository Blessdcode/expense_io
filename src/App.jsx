import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import  { Auth } from './pages/auth/sign-in'
import  { Home } from './pages/home/index'


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth/>}/>
          <Route path='/home'  element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}
