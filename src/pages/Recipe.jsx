import React from "react";

import RecipesList from "../components/recipes/RecipesList";
import Search from "../components/Search";

export default function Recipe({
  recipesList,
  setSearch,
  setFavRecipes,
  favRecipes,
}) {
  return (
    <div>
      <Search setSearch={setSearch} />
      <RecipesList
        recipesList={recipesList}
        setFavRecipes={setFavRecipes}
        favRecipes={favRecipes}
      />
    </div>
  );
}
