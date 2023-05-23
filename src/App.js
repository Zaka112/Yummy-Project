import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState({});
  const [favRecipes, setFavRecipes] = useState([]);
  const [isMealLoading, setIsMealLoading] = useState(true);

  const mealURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  useEffect(() => {
    fetch(mealURL)
      .then((response) => response.json())
      .then((result) => {
        setIsMealLoading(false);
        setRecipes(result);
      })
      .catch((error) => error);
  }, [mealURL]);

  const recipesList = recipes.meals;

  return (
    <div className="App">
      <NavBar favRecipes={favRecipes} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipe"
          element={
            <Recipe
              recipesList={recipesList}
              setSearch={setSearch}
              isMealLoading={isMealLoading}
              setFavRecipes={setFavRecipes}
              favRecipes={favRecipes}
            />
          }
        />
        <Route
          path="/favorite"
          element={<Favorite favRecipes={favRecipes} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
