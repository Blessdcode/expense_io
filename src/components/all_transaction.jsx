/** @format */

import React, { useState } from "react";
import { AiFillDelete, AiFillHome } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { useAddTransaction } from "../hooks/useAddTransaction";
import { useGetTransaction } from "../hooks/useGetTransactions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function TransactionAll() {
	const { addTransaction } = useAddTransaction();
	const { transactions, deleteTransaction } = useGetTransaction();
	const [hoveredId, setHoveredId] = useState(null);
	const handleDelete = (transactionId) => {
		deleteTransaction(transactionId);
		toast.success("Transaction deleted successfully!");
	};
	const navigate = useNavigate();
	const onNavigate = () => {
		navigate("/home");
	};
	return (
		<div className="mt-10 container relative">
			<div className="flex justify-between items-center mb-8">
				<AiFillHome
					size={34}
					onClick={onNavigate}
				/>
				<p className="text-[20px] text-primary">History</p>
			</div>

			{transactions.length === 0 && <p>No transactions added yet.</p>}

			{transactions.length > 0 && (
				<div className="p-4">
					<div className="p-4 ">
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
									onMouseEnter={() =>
										setHoveredId(id)
									}
									onMouseLeave={() =>
										setHoveredId(null)
									}
									className="flex mt-3 justify-between items-center border-2 border-black p-3 rounded-[14px] h-[100px]">
									<div className="">
										<h3 className="text-[24px] font-semibold capitalize">
											{title}
										</h3>
										<p className="text-[14px] text-[#858585]">
											{description}
										</p>
									</div>
									<div
										style={{
											color:
												transactionType ===
												"expense"
													? "red"
													: "green",
										}}
										className={`transaction text-[16px] flex items-center `}>
										{transactionType ===
										"expense" ? (
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
									{hoveredId === id && (
										<div className="cursor-pointer abs flex justify-between items-center  p-2 rounded-[14px] h-[100px]">
											<AiFillDelete
												size={30}
												color="red"
												onClick={() =>
													handleDelete(
														id
													)
												}
											/>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
