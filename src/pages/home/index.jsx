/** @format */

import React from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Transaction from "../../components/Transaction";
import TransactionAll from "../../components/all_transaction";
export const Home = () => {
	return (
        <div className=" h-screen">
            <div className="">
			<Header />
            </div>
			<div className="container">
				<Balance />
				<Transaction />
			</div>
		</div>
	);
};
