/** @format */

import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export const SignUpEmail = () => {
	const { isAuth } = useGetUserInfo();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	// Handle form input changes
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check for password mismatch
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setLoading(true);
		setError("");

		try {
			// Create user with email and password
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				formData.email,
				formData.password
			);

			// Update user profile with the provided name
			if (formData.name) {
				await updateProfile(userCredential.user, {
					displayName: formData.name,
				});
			}

			const user = userCredential.user;
			 const authInfo = {
					userID: user.uid,
					name: user.displayName,
					profilePhoto: user.photoURL,
					isAuth: true,
				};
			localStorage.setItem("auth", JSON.stringify(authInfo));
			
			// Redirect to the home page
			setLoading(false);
			navigate("/home");
		} catch (error) {
			setError(error.message);
			setLoading(false);
			console.error("Error during registration:", error);
		}
	};
	if (isAuth) {
		return <Navigate to={"/home"} />;
	}

	return (
		<div className="bg-white w-full h-[90vh] text-primary px-8 pt-[30px] pb-9">
			<AiOutlineArrowLeft
				size={26}
				className="cursor-pointer"
				onClick={() => navigate("/")}
			/>

			<div className="my-3">
				<h3 className="text-[24px] font-bold">Register</h3>
				<p>
					Create an account to access all the features of{" "}
					<b>expense.io</b>!
				</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className="mt-3">
				{/* Email */}
				<div className="mb-4">
					<label htmlFor="email">
						Email
						<br />
					</label>
					<input
						type="email"
						name="email"
						placeholder="Ex: abc@example.com"
						required
						value={formData.email}
						onChange={handleChange}
						className="border w-full py-4 px-6"
					/>
				</div>

				{/* Name */}
				<div className="mb-4">
					<label htmlFor="name">
						Your Name
						<br />
					</label>
					<input
						type="text"
						name="name"
						placeholder="Ex. John Doe"
						required
						value={formData.name}
						onChange={handleChange}
						className="border w-full py-4 px-6"
					/>
				</div>

				{/* Password */}
				<div className="mb-4">
					<label htmlFor="password">
						Password
						<br />
					</label>
					<input
						type="password"
						name="password"
						placeholder="Ex. ********"
						required
						value={formData.password}
						onChange={handleChange}
						className="border w-full py-4 px-6"
					/>
				</div>

				{/* Confirm Password */}
				<div className="mb-4">
					<label htmlFor="confirmPassword">
						Confirm Password
						<br />
					</label>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Ex. ********"
						required
						value={formData.confirmPassword}
						onChange={handleChange}
						className="border w-full py-4 px-6"
					/>
				</div>

				{error && <div className="text-red-600 mb-4">{error}</div>}

				<button
					type="submit"
					disabled={loading}
					className="bg-primary text-white w-full text-center justify-center mt-4 items-center p-4 rounded-[15px]">
					Register
				</button>

				<div className="mt-3 flex items-center gap-2">
					<em>Already have an account?</em>
					<p
						onClick={() => navigate("/log-in")}
						className="cursor-pointer font-bold underline">
						Login
					</p>
				</div>
			</form>
		</div>
	);
};
