/** @format */

import React, { useState } from "react";
import { AiFillDelete, AiFillHome } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { useGetTransaction } from "../hooks/useGetTransactions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TransactionAll = () => {
	const { transactions, deleteTransaction } = useGetTransaction();
	const [hoveredId, setHoveredId] = useState(null);
	const navigate = useNavigate();

	const handleDelete = (transactionId) => {
		deleteTransaction(transactionId);
		toast.success("Transaction deleted successfully!");
	};

	const onNavigate = () => {
		navigate("/home");
	};

	return (
		<div className="container mt-10">
			<div className="flex justify-between items-center mb-14">
				<AiFillHome
					size={34}
					onClick={onNavigate}
					className="cursor-pointer"
				/>
				<p className="text-2xl font-bold text-primary">
					Transaction History
				</p>
			</div>

			{transactions.length === 0 && (
				<p className="text-lg">No transactions added yet.</p>
			)}

			{transactions.length > 0 && (
				<div className="grid gap-8">
					{transactions.map((transaction) => {
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
								className="transaction-card relative flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md"
								onMouseEnter={() => setHoveredId(id)}
								onMouseLeave={() => setHoveredId(null)}>
								<div className="flex flex-col">
									<h3 className="text-lg font-semibold capitalize">
										{title}
									</h3>
									<p className="text-sm text-gray-600">
										{description}
									</p>
								</div>
								<div
									className={`text-lg font-bold ${
										transactionType === "expense"
											? "text-red-500"
											: "text-green-500"
									}`}>
									{transactionType === "expense"
										? "-"
										: "+"}
									<TbCurrencyNaira className="inline-block" />
									{transactionAmount}
								</div>
								{hoveredId === id && (
									<AiFillDelete
										size={24}
										color="red"
										onClick={() =>
											handleDelete(id)
										}
										className="absolute -right-6 cursor-pointer"
									/>
								)}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default TransactionAll;
