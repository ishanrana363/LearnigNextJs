import Meal from '@/components/Meal'
import React from 'react'

const MealPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-7 ' >
            <p className='font-semibold text-2xl text-center ' >Chose your meal</p>
            <h1 className="font-bold text-center text-3xl " >Mead db</h1>
            {/* meal list */} 
            <Meal></Meal>
        </div>
    )
}

export default MealPage
