import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Auth } from './pages/auth/sign-in'
import { Home } from './pages/home/index'
import AddIncome from './components/AddIncome'
import AddExpense from './components/AddExpense'
import { GlobalProvider } from './context/GlobarState'
import TransactionAll from './components/all_transaction';
// 

export default function App() {
  return (
    <div className="flex flex-col  ">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path='/' exact element={<Auth />} />
            <Route path='/home' element={<Home />} />
            <Route path='/addincome' element={<AddIncome />} />
            <Route path='/addexpense' element={<AddExpense />} />
            <Route path='/transaction' element={<TransactionAll />} />
          </Routes>
        </Router>
        <ToastContainer />
      </GlobalProvider>
    </div>
  )
}
