import React, { useEffect, useState } from 'react'
import NavComponent from './../components/NavComponent'
import PostCardComponent from '../components/PostCardComponent';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CARDS_PER_ROW = 3
const ROWS_PER_PAGE = 3
const CARDS_PER_PAGE = CARDS_PER_ROW * ROWS_PER_PAGE

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        // Fetch posts and users in parallel
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        ]).then(([postsData, usersData]) => {
            setPosts(postsData)
            setUsers(usersData)
        })
    }, [])

    // Helper to get author name by userId
    const getAuthorName = (userId) => {
        const user = users.find(u => u.id === userId)
        return user ? user.name : 'Unknown'
    }

    // Pagination logic
    const totalPages = Math.ceil(posts.length / CARDS_PER_PAGE)
    const paginatedPosts = posts.slice((page - 1) * CARDS_PER_PAGE, page * CARDS_PER_PAGE)

    // Helper to chunk posts into rows
    const chunkArray = (arr, size) => {
        const result = []
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size))
        }
        return result
    }

    const postRows = chunkArray(paginatedPosts, CARDS_PER_ROW)

    return (
        <div>
            <NavComponent />
            <div className='w-full flex justify-center items-center p-10'>
                <p className='text-5xl font-semibold tracking-wider'>Posts List</p>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center p-5'>
                {postRows.map((row, idx) => (
                    <div key={idx} className='flex gap-5 flex-wrap justify-center items-center w-full'>
                        {row.map(post => (
                            <PostCardComponent
                                key={post.id}
                                post={post}
                                author={getAuthorName(post.userId)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-3 pb-10">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    <IoIosArrowBack />
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}

export default PostList