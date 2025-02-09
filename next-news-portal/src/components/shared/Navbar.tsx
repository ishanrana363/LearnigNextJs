"use client";
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button";
import { MdOutlineClose } from "react-icons/md";

import { AiOutlineMenu } from "react-icons/ai";


import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

const Navbar = () => {
  const [menuOpen,isMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    isMenuOpen(!menuOpen)
  }
  return (
    <div className="shadow-md">
      <header className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className=' ' >
          <Link className="font-bold text-2xl" href="/">
            Daily News
          </Link>
        </div>

        {/* Menu */}
        <nav className='lg:flex items-center space-x-5 hidden  ' >
          <NavigationMenu>
            <NavigationMenuList className='ml-5' >
              {/* News Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/news">News</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-haspopup="true">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white shadow-md rounded-md">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/service-1">Web Development</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/service-2">Mobile Apps</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/service-3">SEO</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Additional Links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className=" " >
                <NavigationMenuLink asChild>
                  <Link className="ml-5" href="/content">Content</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className='lg:block hidden' >
          <div className='flex items-center space-x-2' >
            <span>Drak Mode</span>
            <Switch />
            <div>
              <Button variant="default">Login</Button>

            </div>

          </div>
        </div>
        <div className='lg:hidden' >
          <div  >
            <span>
              <Button onClick={toggleMenu} >
                {
                  menuOpen ? <> <MdOutlineClose /> </>:<><AiOutlineMenu /></>
                }

              </Button>
            </span>
          </div>
        </div>


        {/* mobile menu */}


      </header>
    </div>
  );
};

export default Navbar;
