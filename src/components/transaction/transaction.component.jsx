import { useState } from "react";

import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransaction } from "../../hooks/useGetTransactions";

import "./transaction.style";

const Transaction = () => {
  const { addTransaction } = useAddTransaction();
  const { transactionTotals } = useGetTransaction();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState();

  const submitTransaction = (e) => {
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
  };

  return (
    <form onSubmit={submitTransaction}>
      <h3>Select Transaction</h3>
      <div>
        <input
          type="radio"
          name="income"
          id="income"
          value="income"
          checked={transactionType === "income"}
          onClick={(e) => setTransactionType("income")}
        />
        <label htmlFor="income">Income</label>

        <input
          type="radio"
          name="expense"
          id="expense"
          value="expense"
          checked={transactionType === "expense"}
          onClick={(e) => setTransactionType("expense")}
        />
        <label htmlFor="income">Expense</label>
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
  );
};

export default Transaction;
