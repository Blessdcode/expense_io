/** @format */

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Profie = () => {
	const navigate = useNavigate();
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
		<div className="w-[150px] h-[100px] bg-primary rounded-md p-4 flex items-start justify-center text-center">
			<div className="">
				<button
					className="btn2"
					onClick={handleSignOut}>
					Sign out
				</button>
			</div>
		</div>
    );
};

export default Profie;
