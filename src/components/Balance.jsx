/** @format */

import React, { useState } from "react";
import { useGetTransaction } from "../hooks/useGetTransactions";
import { TbCurrencyNaira } from "react-icons/tb";
import { income, expense } from "../assets";
import AddExpenses from "../components/add-expense";

const Balance = () => {
  const { transactionTotals } = useGetTransaction();
  const { balance, Income, Expense, transactionType } = transactionTotals;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const formattedBalance = balance >= 0 ? balance : -balance;
  const isBalancePositive = balance >= 0;
  // const sapAlert =
  //   balance >= 3000 ? "SAPA NO GO CATCH US!!" : "YOU DON TOO DEY SPEND";

  // const onNavigateTo = () => {
  //   navigate("/addexpense");
  // };

  const renderAmountWithCurrency = (amount) => {
    const formattedAmount = Math.abs(amount);
    return (
      <>
        {transactionType === "expense" && (
          <span className="text-red-500">-</span>
        )}
        <TbCurrencyNaira className="inline-block text-white" />
        {formattedAmount}
      </>
    );
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-sm text-gray-300">Account Balance</p>
        <h2
          className={`text-4xl font-semibold ${
            isBalancePositive ? "text-white" : "text-red-500"
          }`}>
          {isBalancePositive ? null : "-"}
          <TbCurrencyNaira className="inline-block text-lg" />
          {formattedBalance}
        </h2>
        {/* <p className="mt-2 text-sm">{sapAlert}</p> */}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-500 rounded-lg p-4 text-white flex items-center justify-between">
          <div className="bg-white rounded-full p-2">
            <img src={income} alt="income" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm">Income</p>
            <p className="flex items-center text-lg">
              <TbCurrencyNaira className="inline-block text- mr-1" />
              {Income}
            </p>
          </div>
        </div>

        <div className="bg-red-500 rounded-lg p-4 text-white flex items-center justify-between">
          <div className="bg-white rounded-full p-2">
            <img src={expense} alt="expense" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm">Expense</p>
            <p className="flex items-center text-lg text-white">
              {renderAmountWithCurrency(Expense)}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className="mt-8 w-full bg-primary text-white text-lg font-semibold py-3 rounded-lg">
        Add Transaction
      </button>
      {toggle && <AddExpenses />}
    </section>
  );
};

export default Balance;
