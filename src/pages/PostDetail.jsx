import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavComponent from '../components/NavComponent'

const PostDetail = () => {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(postData => {
                setPost(postData)
                setLoading(false)
            })
            .catch(() => setLoading(false))

        // Fetch comments for this post from https://jsonplaceholder.typicode.com/comments
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postId])

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

    return (
        <div>
            <NavComponent />
            <div className='w-full flex justify-center items-center p-10'>
                <p className='text-5xl font-semibold tracking-wider'>Post Detail</p>
            </div>
            <div className='w-full flex justify-center items-center p-10'>
                <div className='bg-white p-10 max-w-[50%] w-full rounded-md shadow-md'>
                    <div className='detail-header w-full flex flex-col gap-2 border-b border-gray-400 pb-5'>
                        <p className='text-lg text-gray-400'>Post: {post.id}</p>
                        <p className='text-3xl font-bold tracking-wide text-gray-900 mb-1 capitalize'>{post.title}</p>
                    </div>
                    <div className='detail-body w-full flex flex-col justify-center items-start p-5 gap-5'>
                        <p className='text-xl'>{post.body}</p>
                    </div>
                    <div className='comments-section mt-8'>
                        <p className='text-2xl font-semibold mb-3'>Comments:</p>
                        <ul className='space-y-4'>
                            {comments.map(comment => (
                                <li key={comment.id} className='border-b pb-2'>
                                    <p className='font-bold'>{comment.name} <span className='text-sm text-gray-500'>({comment.email})</span></p>
                                    <p>{comment.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail