import React from 'react'
import { auth, provider } from "../../config/firebaseConfig"
import { signInWithPopup } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { illustration, goggle } from '../../assets'
import {useGetUserInfo} from '../../hooks/useGetUserInfo'



export const Auth = () => {
    const {isAuth}= useGetUserInfo()
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider)
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            // isAuth: true
        }
        localStorage.setItem('auth', JSON.stringify(authInfo))
        navigate("/home")
        if(isAuth){
            return <Navigate to={"/home"}/>
        }
    }
    return (
        <div className='flex flex-col items-start md:items-center justify-center ml-6 md:ml-0 my-8'>
            <div className=''>
                <img src={illustration} alt="illutration" className='md:w-[450px] w-full' />
            </div>
            <div className='flex flex-col my-5'>
                <h1 className=' w-4/5 md:w-full text-[38px] md:text-[46px] font-bold text-[#292830]'>Track your Expenses to Save Money</h1>
                <p className='text-[14px] text-left md:text-center text-[#292830]'>Expenseio helps you to organize your income and expenses</p>
            </div>
            <div className='flex items-center gap-2 border border-black rounded-[7px] py-4 px-2'>
                <img src={goggle} alt="goggle" />
                <button
                    className=" "
                    onClick={signInWithGoogle}
                >Continue with Google</button>
            </div>
        </div>
    )
}
