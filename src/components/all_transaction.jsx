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
	const [sortBy, setSortBy] = useState("date"); 
	const navigate = useNavigate();

	const handleDelete = async (transactionId) => {
		try {
			await deleteTransaction(transactionId);
			toast.success("Transaction deleted successfully!");
		} catch (error) {
			toast.error(`Error deleting transaction: ${error.message}`);
		}
	};

	const onNavigate = () => {
		navigate("/home");
	};

	const sortedTransactions = [...transactions].sort((a, b) => {
		switch (sortBy) {
			case "date":
				return new Date(b.date) - new Date(a.date); 
			case "amount":
				return b.transactionAmount - a.transactionAmount; 
			case "title":
				return a.title.localeCompare(b.title); 
			default:
				return 0;
		}
	});

	return (
		<div className="container mt-10">
			<div className="flex justify-between items-center mb-14">
				<AiFillHome
					size={34}
					onClick={onNavigate}
					className="cursor-pointer"
					aria-label="Home"
				/>
				<p className="text-2xl font-bold text-primary">
					Transaction History
				</p>
			</div>

			<div className="mb-4">
				<label htmlFor="sort-by">Sort by:</label>
				<select
					id="sort-by"
					className="ml-2 border"
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
					<option value="title">Title</option>
				</select>
			</div>

			{sortedTransactions.length === 0 && (
				<p className="text-lg">No transactions added yet.</p>
			)}

			{sortedTransactions.length > 0 && (
				<div className="grid gap-8">
					{sortedTransactions.map((transaction) => {
						const {
							id,
							title,
							description,
							transactionAmount,
							transactionType,
							date,
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
									{/* <p className="text-sm text-gray-500">
										Date:{" "}
										{new Date(
											date
										).toLocaleDateString()}
									</p> */}
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
										aria-label="Delete"
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
