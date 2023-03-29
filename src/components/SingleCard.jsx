import React from 'react';

const SingleCard = ({meal, handleBookmark}) => {
    return (
        <div className="p-4 bg-base-100 shadow-xl">
            <figure><img className='rounded-xl' src={meal.strMealThumb} alt="Meals" /></figure>
            <div className="grid gap-2 pt-4">
                <h2 className="card-title">{meal.strMeal}</h2>
                <p>Category: {meal.strCategory}</p>
                <p>Area: {meal.strArea}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBookmark(meal)} className="btn btn-primary w-full">Add to Bookmark</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;