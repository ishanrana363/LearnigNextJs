"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const userRouter = [
        {
            name: 'Home',
            path: '/home',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Contact',
            path: '/contact',
        },
        {
            name: "Product",
            path: '/product',
        },
        {
            name: "Blog",
            path: '/blog',
        },
        {
            name: 'Login',
            path: '/login',
        },
        {
            name: 'Register',
            path: '/register',
        },
    ];
    const pathName = usePathname();
    console.log(pathName);
    const router = useRouter(); 
    const handleChange = ()=>{
        router.push("register")
    }
    if( pathName.includes("dashboard") ){
        return(
            <div className='bg-green-400 py-4 ' >
                dashboard
            </div>
        )
    }
    return (
        <div className='bg-green-400' >
            <div className='max-w-screen-xl mx-auto ' >
                <nav className='flex justify-between items-center  py-4 ' >
                    <h1>NavLogo</h1>
                    <ul className='flex gap-7  ' >
                        {userRouter.map((router, index) => (
                            <li key={index}>
                                <Link className={`${pathName === router.path && "text-white underline "}`} href={router.path}>{router.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleChange} className = "bg-gray-100 px-2 py-2 rounded-3xl  " >Registration</button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
