import Link from 'next/link';
import React from 'react';

const getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    return data;
};

export const metadata = {
    title: 'Post',
    description: 'Post | Page',
};


const PostPage = async () => {
    const postData = await getData();

    return (
        <div className='max-w-screen-xl mx-auto my-6'>
            <div>
                <div className='grid grid-cols-4 gap-6'>
                    {postData.map((post) => (
                        <div className='bg-red-200 p-6 rounded-3xl shadow-2xl flex flex-col justify-between' key={post.id}>
                            <div>
                                <h2 className='my-4 text-lg font-bold h-14 overflow-hidden'>{post.title}</h2>
                                <p className='mb-4'>{post.body}</p>
                            </div>
                            <div className='mt-auto '>
                                <Link className='bg-slate-300 px-4 py-3 rounded-2xl shadow-2xl  ' href={`/post/${post.id}`}>
                                    Postdetails
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostPage;
