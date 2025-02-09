import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold my-3 ' >Latest news</h1>
      <nav>
        <ul className='flex space-x-3 mb-4 ' >
          <li> <Link href={"/news/sport"} >Sport</Link> </li>
          <li> <Link href={"/news/health"} >Health</Link> </li>

        </ul>
      </nav>
      <div className='flex justify-between' >
        <div className = "md:w-4/5 h-96 bg-slate-200 flex justify-center items-center text-3xl font-bold " >
          <h1>All News</h1>
        </div>
        <div className='flex justify-between w-1/5 bg-purple-300 ' >
          <h1>sidebar</h1>
        </div>
      </div>
    </div>
  )
}

export default page
