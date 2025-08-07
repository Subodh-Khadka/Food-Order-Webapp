import MealItem from "./MealItem";

import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setloadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response) {
      }

      const meals = await response.json();
      setloadedMeals(meals);
      console.log(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </ul>
  );
}
