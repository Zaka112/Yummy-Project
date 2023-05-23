import React from "react";

import RecipeItem from "./RecipeItem";

export default function RecipesList({
  recipesList,
  isMealLoading,
  setFavRecipes,
  favRecipes,
}) {
  return (
    <div>
      <div className="recipeGrid">
        {recipesList?.map((recipe) => {
          return (
            <RecipeItem
              recipe={recipe}
              key={recipe.idMeal}
              isMealLoading={isMealLoading}
              setFavRecipes={setFavRecipes}
              favRecipes={favRecipes}
            />
          );
        })}
      </div>
    </div>
  );
}
