import Meal from '@/components/Meal'
import React from 'react'
import style from "./styles.module.css"
export const metadata = {
    title: {
        absolute: "Meal"
    },
    description: 'Meal | Page',
}
const MealPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-7 ' >
            <p className='font-semibold text-2xl text-center ' >Chose your meal</p>
            <h1 className={style.font_green}  >Mead db</h1>
            {/* meal list */}
            <Meal></Meal>
        </div>
    )
}

export default MealPage
