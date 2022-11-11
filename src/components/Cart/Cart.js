import React from 'react';
import MealName from '../MealName/MealName';

const Cart = ({ cart }) => {
    //console.log(cart)
    return (
        <div>
            <h1>Order summary</h1>
            <p>Selected items: {cart.length}</p>
            {
                cart.map(mealname => <MealName mealname={mealname}></MealName>)
            }
        </div>
    );
};

export default Cart;