/** @format */

import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { useAddTransaction } from "../hooks/useAddTransaction";
import { useGetTransaction } from "../hooks/useGetTransactions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Transaction = ({ transaction }) => {
	const { addTransaction } = useAddTransaction();
	const { transactions, deleteTransaction } = useGetTransaction();
	const [hoveredId, setHoveredId] = useState(null);
	const handleDelete = (transactionId) => {
		deleteTransaction(transactionId);
		toast.success("Transaction deleted successfully!");
	};
	const navigate = useNavigate();
	const onNavigate = () => {
		navigate("/transaction");
	};

	return (
		<div className="mt-10">
			<div className="flex justify-between items-center mb-8">
				<p className="text-[20px] text-primary">Transactions</p>
				<div
					className="btn"
					onClick={onNavigate}>
					View all
				</div>
			</div>
			<div className="p-4 h-[30vh] overflow-scroll">
				{transactions.map((transaction, index) => {
					const {
						id,
						title,
						description,
						transactionAmount,
						transactionType,
					} = transaction;
					return (
						<div
							key={id}
							onMouseEnter={() => setHoveredId(id)}
							onMouseLeave={() => setHoveredId(null)}
							className="flex mt-3 justify-between items-center bg-[#FCFFD7] p-3 box-shadow shadow-md h-[80px]">
							<div className="">
								<h3 className="text-[20px] font-semibold capitalize">
									{title}
								</h3>
								<p className="text-[14px] text-[#858585]">
									{description}
								</p>
							</div>
							<div
								style={{
									color:
										transactionType === "expense"
											? "red"
											: "green",
								}}
								className={`transaction text-[16px] flex items-center `}>

								{transactionType === "expense" ? (
									<h2 className="flex items-center">
										-<TbCurrencyNaira />
										{transactionAmount}
									</h2>
								) : (
									<h2 className="flex items-center">
										 <TbCurrencyNaira />
										{transactionAmount}
									</h2>
								)}
							</div>

							{/* {hoveredId === id && (
								<div className="cursor-pointer">
									<AiFillDelete
										size={20}
										color="red"
										onClick={() =>
											handleDelete(id)
										}
									/>
								</div>
							)} */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Transaction;
