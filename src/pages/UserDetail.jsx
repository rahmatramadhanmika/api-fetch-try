import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavComponent from '../components/NavComponent'

const UserDetail = () => {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
                setLoading(false)
            })
    }, [userId])

    if (loading) {
        return (
            <div>
                <NavComponent />
                <div className='w-full flex justify-center items-center p-10'>
                    <p className='text-3xl'>Loading...</p>
                </div>
            </div>
        )
    }

    if (!user) {
        return (
            <div>
                <NavComponent />
                <div className='w-full flex justify-center items-center p-10'>
                    <p className='text-3xl'>User not found</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <NavComponent />
            <div className='w-full flex justify-center items-center p-10'>
                <p className='text-5xl font-semibold tracking-wider'>Users Detail</p>
            </div>
            <div className='w-full flex justify-center items-center p-10'>
                <div className='bg-white p-10 max-w-[50%] w-full rounded-md shadow-md'>
                    <div className='detail-header w-full flex justify-start items-center p-5 gap-5 border-b border-gray-400'>
                        <div className='max-w-[90px] w-full font-semibold rounded-full p-5 bg-slate-300 text-slate-600 flex justify-center items-center text-5xl'>
                            {user.id}
                        </div>
                        <p className='text-6xl font-bold tracking-wider'>{user.name}</p>
                    </div>
                    <div className='detail-body w-full flex flex-col justify-center items-start p-5 gap-5'>
                        <div className='flex gap-2 justify-start items-center'>
                            <p className='text-3xl font-semibold'>Username:</p>
                            <p className='text-3xl'>{user.username}</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <p className='text-3xl font-semibold'>Email:</p>
                            <p className='text-3xl'>{user.email}</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <p className='text-3xl font-semibold'>Phone:</p>
                            <p className='text-3xl'>{user.phone}</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <p className='text-3xl font-semibold'>Street:</p>
                            <p className='text-3xl'>{user.address?.street}</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <p className='text-3xl font-semibold'>City:</p>
                            <p className='text-3xl'>{user.address?.city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail