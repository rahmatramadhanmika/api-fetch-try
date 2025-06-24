import React from 'react'
import { Link } from 'react-router-dom';

const UserCardComponent = ({ user }) => {
    if (!user) return null;

    return (
        <Link to={`/users/${user.id}`} className='card flex flex-col max-w-[400px] w-full p-7 gap-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer flex-shrink-0'>
            <div className='card-header flex flex-col justify-center items-center flex-1 p-1 gap-2'>
                <p className='user-id text-lg font-semibold text-gray-400'>{user.id}</p>
                <p className='user-name text-2xl font-bold tracking-wide text-gray-900 mb-1'>{user.name}</p>
                <div className='w-full border-b border-gray-400'></div>
            </div>
            <div className='card-body flex flex-col justify-center items-start flex-1 gap-1'>
                <div className='user-username flex gap-2 justify-start items-center w-full'>
                    <p>Username:</p>
                    <p>{user.username}</p>
                </div>
                <div className='user-email flex gap-2 justify-start items-center w-full'>
                    <p>Email:</p>
                    <p>{user.email}</p>
                </div>
            </div>
        </Link>
    )
}

export default UserCardComponent