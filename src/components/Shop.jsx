import React, { useEffect, useState } from 'react';
import { addToDb } from '../utilities/database';
import Bookmark from './Bookmark';
import SingleCard from './SingleCard';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then((res) => res.json())
            .then((data) => setMeals(data.meals))
    }, [])

    useEffect(() => {
        const getBookmark = JSON.parse(localStorage.getItem('bookmark'));
        if (getBookmark) {
            setBookmarks(getBookmark);
        }
    }, [meals])

    const handleBookmark = (meal) => {
        const exists = bookmarks.find((bookmark) => bookmark.idMeal === meal.idMeal);
        if (exists) {
            return alert('This meal is already exists!');
        }
        const newBookmark = [...bookmarks, meal];
        setBookmarks(newBookmark);

        addToDb(meal.idMeal, meal.strMeal);
    }

    const handleDeleteBookmark = () => {
        localStorage.removeItem('bookmark');
        setBookmarks([]);
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
                <Bookmark bookmarks={bookmarks} key={bookmarks.idMeal} handleDeleteBookmark={handleDeleteBookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Shop;