import Link from 'next/link';

const Navbar = () => {
    const router = [
        {
            path: "/",
            element: "Home"
        },
        {
            path: "/about",
            element: "About"
        },
        {
            path: "/post",
            element: "Post"
        },
        {
            path : "meals",
            element : "Meals"
        }
    ];

    return (
        <div className='bg-green-500'>
            <div className='max-w-screen-xl mx-auto'>
                <nav className='p-4 flex justify-between items-center '>
                    <h1 className='text-2xl font-bold'>NavBar</h1>
                    <ul className='p-4 flex space-x-4'>
                        {router.map((route, index) => (
                            <li key={index} className='text-white'>
                                <Link href={route.path}>
                                    {route.element}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
