import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobarState';
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useAddTransaction } from '../hooks/useAddTransaction';


const AddIncome = () => {
    const { addTransaction } = useAddTransaction()


    const navigate = useNavigate();

    const onNavigate = () => {
        navigate("/home")
    }
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [transactionAmount, setTransactionAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            title,
            description,
            transactionAmount,
        })
    }



    return (
        <div className='bg-success h-screen'>
            <div className='container'>
                <div className="flex justify-between items-center text-white">
                    <AiFillHome size={32} className='text-white' onClick={onNavigate} />
                    <h2 className='text-3xl font-semibold'>Income</h2>
                </div>

                <div className='text-white mt-20 '>
                    <p className=' text-lg'>Amonut made</p>
                    <h2 className='text-[56px] font-bold'><b>N</b>1000</h2>
                </div>

            </div>
            <div className="bg-white w-full h-[90vh] text-primary px-8 pt-[30px] pb-9">
                <h3 className='text-[18px] font-bold'>Add new transaction</h3>
                {/* form */}
                <form onSubmit={onSubmit} className='mt-6'>
                    <div className=" ">
                        <label htmlFor="text">
                            Items <br />
                        </label>
                        <input type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter category"
                            className='w-fill border w-full rounded-[15px] py-4 px-6'
                        />
                    </div>
                    <div className="m">
                        <label htmlFor="amount">
                            Amount <br />
                        </label>
                        <input type="number"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="Enter amount"
                            className='w-fill border w-full rounded-[15px] py-4 px-6'
                        />
                    </div>
                    <div className=" ">
                        <label htmlFor="text">
                            Description
                        </label>

                        <textarea name="" id="" cols="30" rows="10"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter text"
                            className='w-fill border w-full rounded-[15px] py-4 px-6'
                        ></textarea>
                    </div>
                    <button className="flex bg-primary text-white w-full text-center justify-center mt-4 items-center p-4 rounded-[15px]">Add transaction</button>
                </form>
            </div>
        </div>
    )
}

export default AddIncome
