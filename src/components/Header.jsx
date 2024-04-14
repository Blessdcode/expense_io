/** @format */

import React from "react";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../config/firebaseConfig";
import {img} from '../assets'

const Header = () => {
	const { name, profilePhoto } = useGetUserInfo();
	const { authUser } = useAuth();
	const navigate = useNavigate();

	// Get the current date
	const currentDate = new Date();
	const dayOfWeek = currentDate.toLocaleDateString("en-US", {
		weekday: "long",
	});
	const dayOfMonth = currentDate.getDate();
	const month = currentDate.toLocaleDateString("en-US", { month: "long" });
	const currentHour = currentDate.getHours();
	let greeting;

	if (currentHour >= 5 && currentHour < 12) {
		greeting = "Good morning";
	} else if (currentHour >= 12 && currentHour < 18) {
		greeting = "Good afternoon";
	} else {
		greeting = "Good evening";
	}

	const handleSignOut = async () => {
		try {
			await signOut(auth);
			localStorage.clear();
			navigate("/");
		} catch (error) {
			console.error("Error signing out:", error.message);
		}
	};
	

	return (
		<div className="flex justify-around items-center mt-4 border-b mx-0 font-[500] pt-2">
			<div className="flex flex-col pb-3 text-[14px] justify-start">
				<h2 className="text-[18px] font-semibold ">{greeting}</h2>
				<div className="flex">
					<p>
						{dayOfWeek}, {dayOfMonth}
					</p>
					<p>{month}</p>
				</div>
			</div>

			{/* User details section */}
			<div className="flex items-center flex-col md:flex-row justify-end pb-3">
				<div className="flex">
					{profilePhoto && (
						<>
							<img
								src={
									profilePhoto || img
								}
								alt={name}
								className="w-7 h-7 mr-1 rounded-full bg-black object-cover"
							/>
						</>
					)}
					<h3 className="font-[500] text-[16px]">{name}</h3>
				</div>
				<div className="ml-5">
					<button
						className="btn"
						onClick={handleSignOut}>
						Sign out
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
