import React from "react";

import cake from "../assets/cake.avif";
import shrimp from "../assets/shrimp.avif";
import pizza from "../assets/pizza.webp";
import salad from "../assets/salad.avif";
import chicken from "../assets/chicken.avif";

export default function Home() {
  return (
    <div>
      <div className="home">
        <h1> HEALTHY DELICIOUS RECIPES</h1>
      </div>
      <div>
        <h2>Popular food</h2>
      </div>
      <p>We Provide a large varity of Recipies</p>
      <div className="homeImages">
        <div>
          <img src={cake} alt="Cake" />
        </div>
        <div>
          <img src={shrimp} alt="Shrimps" />
        </div>
        <div>
          <img src={pizza} alt="Pizza" />
        </div>
        <div>
          <img src={salad} alt="Salad" />
        </div>
        <div>
          <img src={chicken} alt="Chicken" />
        </div>
      </div>
    </div>
  );
}
