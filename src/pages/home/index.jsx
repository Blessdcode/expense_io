import React from 'react'
import { useAddTransaction } from '../../hooks/useAddTransaction'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Transaction from '../../components/Transaction'
export const Home = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Balance />
                <Transaction />
            </div>
        </div>
    )
}
