import React, { useEffect, useState } from 'react';
import { addToDb } from '../utilities/database';
import Bookmark from './Bookmark';
import SingleCard from './SingleCard';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then((res) => res.json())
            .then((data) => setMeals(data.meals))
    }, [])

    useEffect(() => {
        const getBookmark = JSON.parse(localStorage.getItem('bookmark'));
        if (getBookmark) {
            setBookmark(getBookmark);
        }
    }, [meals])

    const handleBookmark = (meal) => {
        if (![...bookmark].includes(meal)) {
            const newBookmark = [...bookmark, meal];
            setBookmark(newBookmark);
        } else {
            return;
        }

        addToDb(meal.idMeal, meal.strMeal);
    }

    return (
        <div className='max-w-screen-lg mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    meals.map((meal) => {
                        return (
                            <SingleCard meal={meal} key={meal.idMeal} handleBookmark={handleBookmark}></SingleCard>
                        )
                    })
                }
            </div>
            <div>
                <Bookmark bookmark={bookmark} key={bookmark.idMeal}></Bookmark>
            </div>
        </div>
    );
};

export default Shop;