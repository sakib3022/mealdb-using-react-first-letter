import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './MealDB.css'
const MealDB = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div className='meals-container'>

            <div className="meals-list">
                {
                    meals?.meals?.map(meal => <Meals
                        meal={meal}
                        key={meal.idMeal}
                    ></Meals>)
                }
            </div>
            <div className="meals-order-summary">
                <h1>Meals order summary</h1>
            </div>
        </div>
    );
};

export default MealDB;