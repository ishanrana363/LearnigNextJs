import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const routePath = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Product", path: "/product" },
    ];

    return (
        <div className="bg-green-400">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo Section */}
                <h1 className="text-2xl font-bold">NavLogo</h1>

                {/* Navigation Links */}
                <ul className=" flex flex-row ">
                    {routePath.map((route, index) => (
                        <li key={index} className="text-lg font-medium hover:text-white">
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
