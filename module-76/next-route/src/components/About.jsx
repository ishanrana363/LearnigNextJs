"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const About = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <h1>This is about page</h1>
      <Link className= { `` } href={"/about/category"} >Category</Link> <br />
      <Link className= { `` } href={"/about/apple"} >Apple</Link>
    </div>
  )
}

export default About
