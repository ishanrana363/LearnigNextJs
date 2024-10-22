export const PATCH = async (req, { params }) => {
    const body = await req.json();

    const index = comments.findIndex((i)=> i.id === parseInt(params.id));
    comments[index] = {
        text : body.text
    }
    return Response.json({
        message: "Dynamically linked list",
        comments: comments
    })
}

export const DELETE = async (req, { params }) => {
    const index = comments.filter((i)=> i.id !== parseInt(params.id));
    return Response.json({
        message: "Dynamically linked list",
        comments: index
    })
};

const comments = [
    { "id": 1, "text": "This article is very informative!" },
    { "id": 2, "text": "I totally agree with your points." },
    { "id": 3, "text": "I found this post helpful, thanks for sharing." },
    { "id": 4, "text": "Could you elaborate more on this topic?" },
    { "id": 5, "text": "Interesting perspective, but I have a different opinion." },
    { "id": 6, "text": "This is exactly what I was looking for!" },
    { "id": 7, "text": "Some points are unclear, can you explain further?" },
    { "id": 8, "text": "Amazing content, keep up the great work!" },
    { "id": 9, "text": "I don’t agree with this approach, but it’s thought-provoking." },
    { "id": 10, "text": "Thanks for the insights, I learned a lot from this." }
]
