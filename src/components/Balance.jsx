import React, { useContext, useState } from 'react'
import { income, expense } from '../assets'
import { useNavigate } from 'react-router-dom'
import { useGetTransaction } from '../hooks/useGetTransactions';
import { TbCurrencyNaira } from "react-icons/tb";





const Balance = () => {
  const { transactionTotals } = useGetTransaction()

  const {
    balance,
    Income,
    Expense
  } = transactionTotals

  const navigate = useNavigate();


  const onNavigateTo = () => {
    navigate("/addexpense");
  };

  return (
    <div>
      <div className='flex items-center justify-center flex-col mt-8'>
        <p className='text-[#91919F]'>Account Balance</p>
        {/* <h2 className='text-[56px] font-semibold text-primary'>N{balance}</h2> */}
        {balance >= 0 ? <h2 className='text-[56px] font-semibold text-primary flex items-center'>
          <TbCurrencyNaira />
          {balance}</h2>
          : <h2 className='text-[56px] font-semibold text-primary flex items-center'>-
            <TbCurrencyNaira />
            {balance * -1}</h2>
        }
      </div>

      {/* income&expens */}

      <div className='flex flex-col items-center justify-between mt-10'>


        <div className="flex gap-3">

          <div className='text-white bg-success w-[150px] h-[72px] flex justify-between items-center p-3 rounded-[16px]'
          >
            <div className='bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full'>
              <img src={income} alt="income" />
            </div>
            <div className='text-[18px]'>
              <p>Income</p>
              <p className="flex items-center"><TbCurrencyNaira/>{Income}</p>
            </div>
          </div>

          <div className='text-white bg-danger w-[150px] h-[72px] flex justify-between items-center p-3 rounded-[16px]'

          >
            <div className='bg-white w-[44px] h-[44px] flex items-center justify-center rounded-full'>
              <img src={expense} alt="expense" />
            </div>
            <div className='text-[18px]'>
              <p>Expense</p>
              <p className="flex items-center"><TbCurrencyNaira/>{Expense}</p>
            </div>
          </div>

        </div>
        <button
          onClick={onNavigateTo}

          className='flex bg-primary text-white w-full text-center justify-center mt-4 items-center p-4 rounded-[15px]'>Add Transaction</button>


      </div>
    </div>
  )
}

export default Balance
