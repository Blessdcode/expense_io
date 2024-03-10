import React from 'react'
import { auth, provider } from "../../config/firebaseConfig"
import { signInWithPopup } from 'firebase/auth';

export const Auth = () => {
    const signInWithGoogle = () => {

    }
    return (
        <div className='flex items-center justify-center'>
            <button
                className="bg-slate-600 p-5 text-white rounded-md mt-10"
                onClick={signInWithGoogle}
            >Login with Google</button>
        </div>
    )
}
