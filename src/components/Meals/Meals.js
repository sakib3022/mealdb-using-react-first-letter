import React from 'react';
import './Meals.css'
const Meals = (props) => {
    const { handleToCart } = props;
    //console.log(props)
    const { strMealThumb, strMeal, strArea, strCategory } = props.meal
    return (
        <div className='meal-details'>
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <p>{strMeal}</p>
                <p><small>{strArea}</small></p>
                <p><small>{strCategory}</small></p>
            </div>
            <button onClick={() => handleToCart(props.meal)} className='cart-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Meals;