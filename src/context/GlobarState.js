/** @format */

import React, { createContext, useEffect, useContext, useState } from "react";
import { auth } from "../config/firebaseConfig";

const GlobalContext = createContext();

export const useAuth = () => {
	return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	function signup(email, password) {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				// Optionally, you can perform additional actions upon successful sign-up
			})
			.catch((error) => {
				setError(error.message);
				throw error;
			});
	}

	function signin(email, password) {
		return auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => {
				setError(error.message);
				throw error;
			});
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		signin,
		error,
	};

	return (
		<GlobalContext.Provider value={value}>
			{!loading && children}
		</GlobalContext.Provider>
	);
};
