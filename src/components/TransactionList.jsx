import React from 'react';
import { Transaction } from './Transaction';  
import { useGetTransaction } from '../hooks/useGetTransactions';
import { useAddTransaction } from '../hooks/useAddTransaction';


export const TransactionList = () => {
    const {addTransaction} = useAddTransaction()
    const { transactions } = useGetTransaction();

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </div>
    );
};
