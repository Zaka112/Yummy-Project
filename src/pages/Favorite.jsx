import React from "react";

export default function Favorite({ favRecipes }) {
  return (
    <div>
      <h2>Favorite Recipe List</h2>
      <div className="favList">
        {favRecipes.map((item) => (
          <div className="favItem" key= {item.idMeal}>
            <h1>{item.strMeal}</h1>
            <h3>{item.strCategory}</h3>
            <div>
              {" "}
              <img src={item.strMealThumb} alt={item.strMeal} width={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
