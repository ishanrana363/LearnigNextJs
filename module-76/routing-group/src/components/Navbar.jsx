"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";


const Navbar = () => {
    const router = [
        {
            path: "/home",
            name: "Home",
        },
        {
            path: "/about",
            name: "About",
        },
        {
            path: "/contact",
            name: "Contact",
        },
        {
            path: "/blog",
            name: "Blog",
        },
        {
            path: "/faq",
            name: "FAQ",
        }
    ]
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div className="bg-green-500" >
            <div className="max-w-screen-xl mx-auto ">
                <div className="  " >
                    <nav className="flex justify-between items-center " >
                        <h1>NavLogo</h1>
                        <ul className="flex gap-8 py-5 " >
                            {
                                router.map((route, index) => (
                                    <li key={index}>
                                        <Link className={`${pathName === route.path && " underline text-white font-bold "}`} href={route.path}>{route.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
