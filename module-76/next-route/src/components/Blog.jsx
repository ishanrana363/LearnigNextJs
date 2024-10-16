import Link from 'next/link';
import React from 'react';

const Blog = () => {
    const blogData = [
        {
            title: "JavaScript for Beginners",
            description: "An introductory course to learn JavaScript programming.",
            price: 49.99,
            slug: "javascript-for-beginners"
        },
        {
            title: "Advanced Python Programming",
            description: "Master advanced concepts in Python with real-world projects.",
            price: 99.99,
            slug: "advanced-python-programming"
        },
        {
            title: "Full-Stack Web Development Bootcamp",
            description: "Learn front-end and back-end web development.",
            price: 199.99,
            slug: "full-stack-web-development-bootcamp"
        },
        {
            title: "Data Science with Python",
            description: "Analyze data and build machine learning models using Python.",
            price: 129.99,
            slug: "data-science-with-python"
        },
        {
            title: "Digital Marketing Mastery",
            description: "Become an expert in SEO, social media, and paid advertising.",
            price: 79.99,
            slug: "digital-marketing-mastery"
        },
        {
            title: "Cloud Computing Essentials",
            description: "Understand cloud technologies like AWS and Azure.",
            price: 89.99,
            slug: "cloud-computing-essentials"
        },
        {
            title: "Mobile App Development with Flutter",
            description: "Build cross-platform mobile apps using Flutter.",
            price: 109.99,
            slug: "mobile-app-development-with-flutter"
        },
        {
            title: "Blockchain and Cryptocurrency Basics",
            description: "Learn how blockchain and cryptocurrencies work.",
            price: 69.99,
            slug: "blockchain-and-cryptocurrency-basics"
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-6">
            {/* Grid Layout */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
                {blogData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg p-5 shadow-lg flex flex-col h-full"
                    >
                        {/* Title with consistent height */}
                        <h2 className="text-lg font-bold text-center mb-2 h-12 overflow-hidden">
                            {item.title}
                        </h2>

                        {/* Description with fixed height */}
                        <p className="text-sm my-4 text-center mb-4  overflow-hidden">
                            {item.description}
                        </p>

                        {/* Price aligned to the right */}
                        <p className="text-md font-medium  mb-6">
                            Price: ${item.price.toFixed(2)}
                        </p>

                        {/* Button at the bottom */}
                        <div className="mt-auto">
                            <button
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-3xl"
                            >
                                <Link href={`/blog/${item.slug}`}  >Blog Details</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
