import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import './MealDB.css'
const MealDB = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    const handleToCart = (meals) => {
        const newCart = [...cart, meals];
        setCart(newCart)
    }
    return (
        <div className='meals-container'>

            <div className="meals-list">
                {
                    meals?.meals?.map(meal => <Meals
                        meal={meal}
                        handleToCart={handleToCart}
                        key={meal.idMeal}
                    ></Meals>)
                }
            </div>
            <div className="meals-order-summary">
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default MealDB;