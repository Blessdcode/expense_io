import React from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'
import { useGetUserInfo } from './useGetUserInfo'


export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions")
    const { userID } = useGetUserInfo()
    const addTransaction = async ({
        title,
        description,
        transactionAmount,
        transactionType,
    }) => {
        await addDoc(transactionCollectionRef, {
            userID,
            title,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()
        })
    }

    return (
        { addTransaction }
    )
}
