import React from "react";

import Cake from "../assets/cake.avif"
import Shrimp from "../assets/shrimp.avif"
import Pizza from "../assets/pizza.webp"
import Salad from "../assets/salad.avif"
import Chicken from "../assets/chicken.avif"

export default function Home() {
  return (
    <div>
      <div className="home">
        <h1> HEALTHY DELICIOUS RECIPES</h1>
      </div>
      <div><h3>Popular food</h3></div>
      <div>We Provide a large varity of Recipies</div>
      <div className="homeImages">
      <div >
        <img src={Cake} width={100} alt="Cake" /></div>
        <div> <img src={Shrimp} alt="Shrimps" /></div>
        <div>  <img src={Pizza} width={200} alt="Pizza" /></div>
        <div>   <img src={Salad} alt="Salad" /></div>
        <div> <img src={Chicken} alt="Chicken" />
      </div></div>
    </div>
  );
}
