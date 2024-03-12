import { useEffect, useState } from "react"
import { query, where, collection, onSnapshot, orderBy, doc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import { useGetUserInfo } from './useGetUserInfo'




export const useGetTransaction = () => {
    const { userID } = useGetUserInfo()
    const transactionCollectionRef = collection(db, "transactions")
    const [transactions, setTransactions] = useState([])
    const [transactionTotals, setTransactionTotals] = useState({
        balance: 0.0, Income: 0.0, Expense: 0.0
    })

    const getTransaction = async () => {
        let unsubscribe
        try {
            const queryTransactions = query(
                transactionCollectionRef,
                where("userID", "==", userID),
                orderBy("createdAt")
            )
            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = []
                let totalIncome = 0
                let totalExpenses = 0
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    
                    docs.push({ ...data, id })

                    if (data.transactionType === "expense") {
                        totalExpenses += Number(data.transactionAmount)
                    } else {
                        totalIncome += Number(data.transactionAmount)
                    }
                })
                setTransactions(docs)
                let balance = totalIncome - totalExpenses;

                setTransactionTotals({
                    balance,
                    Income: totalIncome,
                    Expense: totalExpenses
                })
            })
        }

        catch (err) {
            console.error(err)
        }
        return () => unsubscribe
    }

    const deleteTransaction = async (transactionId) => {
        try {
            const transactionDocRef = doc(db, "transactions", transactionId);
            await deleteDoc(transactionDocRef);
        } catch (err) {
            console.error("Error deleting transaction:", err);
        }
    };

    useEffect(() => {
        getTransaction()
    }, [])

    return { transactions, transactionTotals, deleteTransaction }
}