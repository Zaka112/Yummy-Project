import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";

import RecipeItem from "../pages/RecipeItem";

export default function Search() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState({});
  const [isMealLoading, setIsMealLoading] = useState(true);

  const mealURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  const findRecipe = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch(mealURL)
      .then((response) => response.json())
      .then((result) => {
        setIsMealLoading(false);
        setRecipes(result);
      })
      .catch((error) => error);
  }, [search]);

  const recipe = recipes.meals;
  //console.log(recipe, "recipe");

  const filteredList = recipe && recipe.filter((meal) => {
    return !search
      ? meal
      : meal.strMeals.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <form action="">
        <TextField
          id="standard-basic"
          label="Search Recipe"
          variant="standard"
          onChange={findRecipe}
        />
        {filteredList?.map((meal) => {
         
          if (filteredList.length > 0) {
            return (
              <div className="recipeGrid">
                <RecipeItem meal={meal} isMealLoading={isMealLoading}  key = {meal.idMeals}/>
              </div>
            );
          } else <p> "Sorry we have not got this recipe yet ! "</p>;
        })}
      </form>
    </div>
  );
}
