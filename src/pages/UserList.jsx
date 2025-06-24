import React, { useEffect, useState } from 'react'
import NavComponent from './../components/NavComponent';
import { Link } from 'react-router-dom';
import UserCardComponent from '../components/UserCardComponent';

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => { setUsers(data) })
    }, [])

    return (
        <div>
            <NavComponent />
            <div className='w-full flex justify-center items-center p-10'>
                <p className='text-5xl font-semibold tracking-wider'>Users List</p>
            </div>
            <div className='flex gap-5 flex-wrap justify-center items-center p-5'>
                {users.map((user) => (
                    <UserCardComponent key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default UserList