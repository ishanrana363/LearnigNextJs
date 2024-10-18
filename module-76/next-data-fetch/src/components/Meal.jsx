"use client"

import { useEffect, useState } from "react";

const Meal = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState();
    const [meal, setMeal] = useState([]);

    const getInputValue = (e) => {
        setSearch(e.target.value);
    };

    const loadData = async () => {
        try {
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            let data = await res.json();
                setMeal(data.meals);
                setError("");
        } catch (error) {
            setError("Failed to fetch data");
        }
    };

    useEffect(() => {
        if (search !== "") { // Only trigger search if there is a value in the input
            loadData();
        }
    }, [search]);

    return (
        <div>
            <div className=''>
                <h1 className='text-center my-2'>Search your meal</h1>
                <input
                    value={search} // Bind the input value to the state
                    onChange={getInputValue}
                    type="text"
                    placeholder='Search your meal'
                    className='mx-auto block outline-none py-2 border px-3 hover:outline-2 hover:border-red-400'
                />
                <button
                    onClick={loadData} // Trigger search on button click
                    className='bg-green-600/65 py-[9px] font-semibold text-md px-3 block mx-auto my-2'>
                    Search meal
                </button>
            </div>
            <div>
                {meal.length > 0 && meal.map((m, i) => (
                    <div key={i} className='border-2 border-gray-200 p-2 my-2'>
                        <h2 className='text-xl font-semibold my-2'>{m.strMeal}</h2>
                        <p className='text-sm'>{m.strInstructions}</p>
                    </div>
                ))}
                {error && <p className='text-red-600'>{error}</p>}
            </div>
        </div>
    );
};

export default Meal;
