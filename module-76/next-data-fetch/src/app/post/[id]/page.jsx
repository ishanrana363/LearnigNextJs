import React from 'react'

const singlePost = async (id)=>{
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await res.json();
    return data;
}

const PostDetailsPage = async ({ params }) => {
    const postData = await singlePost(params.id);
    return (
        <div>
            <h1> title {postData.title} </h1>
            <p> Description {postData.body}  </p>
        </div>
    )
}

export default PostDetailsPage
