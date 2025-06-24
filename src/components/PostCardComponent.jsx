import React from 'react'
import { Link } from 'react-router-dom'

const PostCardComponent = ({ post, author }) => {
    if (!post) return null

    return (
        <Link
            to={`/posts/${post.id}`}
            className='card flex flex-col max-w-[650px] h-72 w-full p-7 gap-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer flex-shrink-0'
        >
            <div className='card-header flex flex-col justify-center items-center flex-1 p-1 gap-2'>
                <p className='post-id text-lg font-semibold text-gray-400'>Post by {author}</p>
                <p className='post-title text-2xl text-center capitalize font-bold tracking-wide text-gray-900 mb-1'>{post.title}</p>
                <div className='w-full border-b border-gray-400 mt-2'></div>
            </div>
            <div className='card-body flex justify-center items-center flex-1 p-1 gap-1'>
                <p>{post.body}</p>
            </div>
        </Link>
    )
}

export default PostCardComponent