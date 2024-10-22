// export async function GET() {
//     return Response.json({
//         message: "Hello, Next.js!",
//         comment
//     })
// }

export async function POST(req) {
    const newText = await req.json();
    comment.push({
        "id": comment.length + 1,
        "text": newText.text
    })
    return Response.json({
        message: "Comment added successfully!",
        comment
    })
};




const comment = [
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
