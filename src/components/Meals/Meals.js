import React from 'react';
import './Meals.css'
const Meals = (props) => {
    const { strMealThumb, strMeal, strArea, strCategory } = props.meal
    return (
        <div className='meal-details'>
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <p>{strMeal}</p>
                <p><small>{strArea}</small></p>
                <p><small>{strCategory}</small></p>
            </div>
        </div>
    );
};

export default Meals;