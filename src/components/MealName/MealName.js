import React from 'react';

const MealName = (props) => {
    const { strMeal } = props.mealname
    return (
        <div>
            <p>{strMeal}</p>
        </div>
    );
};

export default MealName;