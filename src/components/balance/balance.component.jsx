/** @format */

import React from "react";
import { useGetTransaction } from "../../hooks/useGetTransactions";
import { TbCurrencyNaira } from "react-icons/tb";

const Balance = () => {
  const { transactionTotals } = useGetTransaction();
  
  const { balance } = transactionTotals;

  const formattedBalance = balance >= 0 ? balance : -balance;
  const isBalancePositive = balance >= 0;
  const sapAlert =
    balance >= 3000 ? "SAPA NO GO CATCH US!!" : "YOU DON TOO DEY SPEND";


  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-sm text-gray-500">Balance</p>
        <h2
          className={`text-3xl font-semibold ${
            isBalancePositive ? "text-primary" : "text-red-500"
          }`}>
          {isBalancePositive ? null : "-"}
          <TbCurrencyNaira className="inline-block text-lg" />
          {formattedBalance}
        </h2>
        <p className="mt-2 text-sm">{sapAlert}</p>
      </div>

      
    </section>
  );
};

export default Balance;
