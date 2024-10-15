import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="bg-green-300 py-5 flex justify-between items-center  " >
                <h1>NavLogo</h1>
                <ul className="flex justify-center gap-10 " >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Product</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
