import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAddTransaction } from "../hooks/useAddTransaction";
// import { useGetTransaction } from "../hooks/useGetTransactions";

const AddExpense = () => {
  const { addTransaction } = useAddTransaction();
  // const { transactionTotals } = useGetTransaction();

 
  // const onNavigate = () => {
  //   navigate("/home");
  // };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState();

  // const { balance } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      title,
      description,
      transactionAmount,
      transactionType,
    });
    setTitle("");
    setDescription("");
    setTransactionAmount(0);
    setTransactionType("expense");

    toast.success("Transaction added successfully!");
  };

  return (
  
	 <div className="bg-white w-full h-full text-primary px-8 pt-[30px] pb-9">
        {/* <h3 className='text-[18px] font-bold'></h3> */}
        <form onSubmit={onSubmit} className="mt-6">
          <div className="flex flex-col my-4 g-5">
            <div>
              <h2>Select Transaction</h2>
            </div>
            <div>
              <input
                className="input mr-2"
                type="radio"
                name="income"
                id="income"
                value="income"
                checked={transactionType === "income"}
                onClick={(e) => setTransactionType("income")}
              />
              <label className="mr-4" htmlFor="income">
                Income
              </label>

              <input
                className="input mr-2"
                type="radio"
                name="expense"
                id="expense"
                value="expense"
                checked={transactionType === "expense"}
                onClick={(e) => setTransactionType("expense")}
              />
              <label htmlFor="income">Expense</label>
            </div>
          </div>
          <div className=" ">
            <label htmlFor="text">
              Category Name <br />
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter category"
              required
              className="w-fill border w-full rounded-[15px] py-4 px-6"
            />
          </div>
          <div className="m">
            <label htmlFor="amount">
              Amount <br />
            </label>
            <input
              type="number"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder="Enter amount"
              required
              className="w-fill border w-full rounded-[15px] py-4 px-6"
            />
          </div>
          <div className=" ">
            <label htmlFor="text">Description</label>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (Optional)"
              className="w-fill border w-full rounded-[15px] py-4 px-6"></textarea>
          </div>
          <button className="flex bg-primary text-white w-full text-center justify-center mt-4 items-center p-4 rounded-[15px]">
            Add transaction
          </button>
        </form>
      </div>
  );
};

export default AddExpense;
