import React from 'react';
import CardContainer from './CardContainer';
import Bookmark from './Bookmark';

const Container = () => {
    const [bookmark, setBookmark] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then((res) => res.json())
            .then((data) => setMeals(data.meals))
    }, [])

    const handleBookmark = (meal) => {
        if (![...bookmark].includes(meal)) {
            const newBookmark = [...bookmark, meal];
            setBookmark(newBookmark);
        }
        addToDb(meal.idMeal, meal.strMeal)
    }

    return (
        <div className='max-w-screen-lg mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        meals.map((meal) => {
                            return (
                                <SingleCard meal={meal} key={meal.idMeal} handleBookmark={handleBookmark}></SingleCard>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Container;