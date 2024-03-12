import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useAddTransaction } from '../hooks/useAddTransaction';
import { useGetTransaction } from '../hooks/useGetTransactions';

const Transaction = ({ transaction }) => {
  const { addTransaction } = useAddTransaction();
  const { transactions, deleteTransaction } = useGetTransaction();
  const [hoveredId, setHoveredId] = useState(null);
  const handleDelete = (transactionId) => {
    deleteTransaction(transactionId);
  };

  return (
    <div className='mt-10'>
      <div className='flex justify-between items-center mb-8'>
        <p className='text-[20px] text-primary'>Transactions</p>
        <div className="btn">View all</div>
      </div>
      <div className=' p-4  overflow-y-hidden overscroll-y-auto'>

        {transactions.map((transaction, index) => {

          const { id, title, description, transactionAmount, transactionType } = transaction;
          return (
            <div key={id}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className='flex mt-3 justify-between items-center bg-[#FCFFD7] p-3 box-shadow shadow-md'>
              <div className=''>
                <h3 className='text-[24px] font-semibold capitalize'>{title}</h3>
                <p className='text-[14px] text-[#858585]'>{description}</p>
              </div>
              <div
                style={{ color: transactionType === "expense" ? "red" : "green" }}
                className={`transaction text-[16px]`}>
                <b>N{transactionAmount}</b>
              </div>

              {hoveredId === id && (
                <div className='cursor-pointer'>
                  {/* Delete button/icon */}
                  <AiFillDelete size={20} color='red' onClick={() => handleDelete(id)} />
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
