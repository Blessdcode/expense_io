/** @format */

import React, { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/GlobarState";

export const SignUpEmail = () => {
	const emailRef = useRef();
	const nameRef = useRef();
	const passwordRef = useRef();
	const comfirmPasswordRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [sucsess, setSucsess] = useState("");

	const { signup, currentUser } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== comfirmPasswordRef.current.value) {
			return setError("password do not match");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			setSucsess("account created");
		} catch {
			setError("failed to create account");
			console.log(error);
		}
		setLoading(false);
	}

	const navigate = useNavigate();
	const onNavigate = () => {
		navigate("/");
	};
	const logIn = () => {
		navigate("/log-in");
	};

	return (
		<div className="bg-white w-full h-[90vh] text-primary px-8 pt-[30px] pb-9">
			<AiOutlineArrowLeft
				size={26}
				className=" cursor-pointer"
				onClick={onNavigate}
			/>
			<div className="my-3">
				<h3 className="text-[24px] font-bold">Register</h3>
				<p>
					Create an account to access all the features of
					<b> expense.io! </b>
				</p>
			</div>
			{currentUser && currentUser.email}
			{error && alert(`${error}`)}
			{sucsess && alert(`${sucsess}`)}
			<form
				onSubmit={handleSubmit}
				className="mt-3">
				<div className="flex flex-col  g-5"></div>
				{/* email */}
				<div className=" ">
					<label htmlFor="email">
						Email
						<br />
					</label>
					<input
						type="email"
						placeholder="Ex: abc@example.com"
						required
						ref={emailRef}
						className="w-fill border w-full py-4 px-6"
					/>
				</div>
				{/* name */}
				<div className="m">
					<label htmlFor="text">
						Your Name
						<br />
					</label>
					<input
						type="text"
						placeholder="Ex. John Doe"
						// required
						ref={nameRef}
						className="border w-full py-4 px-6"
					/>
				</div>
				{/* password */}
				<div className="m">
					<label htmlFor="text">
						Your Password
						<br />
					</label>
					<input
						type="password"
						placeholder="Ex. ********"
						required
						ref={passwordRef}
						className="border w-full py-4 px-6"
					/>
				</div>
				{/* confirm password */}
				<div className="m">
					<label htmlFor="text">
						Confirm Password
						<br />
					</label>
					<input
						type="password"
						placeholder="Ex. ********"
						required
						ref={comfirmPasswordRef}
						className=" border w-full py-4 px-6"
					/>
				</div>

				<button
					disabled={loading}
					className="flex bg-primary text-white w-full text-center justify-center mt-4 items-center p-4 rounded-[15px]">
					Register
				</button>
				<div className="mt-3 flex items-center gap-2">
					<em>Already have an account?</em>
					<p
						onClick={logIn}
						className=" cursor-pointer font-bold underline">
						Login
					</p>
				</div>
			</form>
		</div>
	);
};
