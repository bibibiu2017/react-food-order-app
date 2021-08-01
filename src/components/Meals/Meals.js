import React from "react";
import MealsAvailable from "./MealsAvailable/MealsAvailable";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealsAvailable />
    </React.Fragment>
  );
};

export default Meals;
