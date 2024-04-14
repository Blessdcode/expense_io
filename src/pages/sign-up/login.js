/** @format */

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";

export const LoginWithEmail = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				emailRef.current.value,
				passwordRef.current.value
			);
			console.log(userCredential);
			const user = userCredential.user;
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/home");
		} catch (error) {
			console.error(error);
		}
	}

	const navigate = useNavigate();
	const onNavigate = () => {
		navigate("/");
	};
	const signUp = () => {
		navigate("/sign-in");
	};

	return (
		<div className="bg-white w-full h-[90vh] text-primary px-8 pt-[30px] pb-9">
			<AiOutlineArrowLeft
				size={26}
				className=" cursor-pointer"
				onClick={onNavigate}
			/>
			<div className="my-3">
				<h3 className="text-[24px] font-bold">Login</h3>
				<p>Login now to track all your expenses and income!</p>
			</div>
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
				{/* forgot password */}
				<p className="underline mt-3">Forgot Password?</p>

				<button className="flex bg-primary text-white w-full text-center justify-center mt-4 items-center p-4 rounded-[15px]">
					Login
				</button>
				<div className="mt-3 flex items-center gap-2">
					<em>Don’t have an account?</em>
					<p
						className=" cursor-pointer font-bold underline"
						onClick={signUp}>
						Register
					</p>
				</div>
			</form>
		</div>
	);
};
