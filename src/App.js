import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";

function App() {
  return <div className="App"><NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recipe" element={<Recipe />} />
    <Route path="/favorite" element={<Favorite />} />
    <Route path="/contact" element={<Contact />} />
  </Routes></div>;
}

export default App;
