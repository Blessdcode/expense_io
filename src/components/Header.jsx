import React from 'react';
import { useGetUserInfo } from '../hooks/useGetUserInfo';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const Header = () => {
    const { name, profilePhoto } = useGetUserInfo()
    const {authUser}= useAuth()
    const navigate = useNavigate();


    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.clear()
            navigate("/")

        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };
    // Get the current date
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const imageUrl = "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
    return (
        <div className='flex justify-around items-center mt-4 border-b mx-0 font-[500] pt-2'>
            <div className='flex flex-col pb-3 text-[14px] justify-start'>
                <p>{dayOfWeek}, {dayOfMonth}</p>
                <p>{month}</p>
            </div>

            {/* User details section */}
            <div className='flex items-center flex-col justify-end pb-3'>
                <div className='flex'>

                    {
                        profilePhoto && (
                            <>
                                <img src={profilePhoto} alt={name} className='w-7 h-7 mr-1 rounded-full bg-black object-cover' />
                            </>
                        )
                    }
                    <h3 className='font-[500] text-[16px]'>{authUser?.name}</h3>
                </div>
                <div className='ml-5'>
                    <button className='btn' onClick={handleSignOut}>Sign out</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
