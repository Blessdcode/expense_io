/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Auth } from "./pages/auth/sign-in";
import { Home } from "./pages/home/index";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";
import { GlobalProvider } from "./context/GlobarState";
import TransactionAll from "./components/all_transaction";
import { SignUpEmail } from "./pages/sign-up/sign-up-with";
import { LoginWithEmail } from "./pages/sign-up/login";
import { AuthProvider } from "./context/AuthContext";





export default function App() {
	return (
		<div className="flex flex-col ">
			<GlobalProvider>
				<AuthProvider>
					<Router>
						<Routes>
							<Route
								path="/"
								exact
								element={<Auth />}
							/>
							<Route
								path="/home"
								element={<Home />}
							/>
							<Route
								path="/addincome"
								element={<AddIncome />}
							/>
							<Route
								path="/addexpense"
								element={<AddExpense />}
							/>
							<Route
								path="/transaction"
								element={<TransactionAll />}
							/>
							<Route
								path="/sign-in"
								element={<SignUpEmail />}
							/>
							<Route
								path="/log-in"
								element={<LoginWithEmail />}
							/>
							
						</Routes>
					</Router>
					<ToastContainer />
				</AuthProvider>
			</GlobalProvider>
		</div>
	);
}
