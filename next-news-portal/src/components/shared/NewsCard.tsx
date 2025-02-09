import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button';
import { NewsCardProps } from '@/types/task';


const NewsCard = ({item}: NewsCardProps ) => {
    return (
        <div>
            <div className='border p-4 rounded-md shadow-md'>
                {/* <Link href={`/`}>
                    <Image src={"item?.imageUrl"} width={500} height={500} alt='news image'
                        priority
                        className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200' />
                </Link> */}

                <div>
                    <h2 className='text-xl font-semibold my-3'>{item.description}..</h2>
                    <p className='mb-4'>...</p>
                    <Link href={`/`}>
                        <Button>Read More</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
