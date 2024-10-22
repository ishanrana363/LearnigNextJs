import React from 'react'

const singlePost = async (id) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await res.json();
    return data;
}

export const generateMetadata = async ({ params }) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    let data = await res.json();
    return {
        title: `${data.title}`,
        description: data.body,
        keyword: `${data.body.split(' ')}`
    }
};

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
