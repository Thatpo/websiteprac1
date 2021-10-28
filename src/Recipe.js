import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ image, title, calories, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <img src={image} alt="" />
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
            <p> {String(Math.floor(Number(calories)))} Calories</p>
        </div>
    )
}

export default Recipe;