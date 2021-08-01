import React from "react";
import MealsData from "../../../state/Data/MealsData";
import Card from "../../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./MealsAvailable.module.css";

const MealsAvailable = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {MealsData.map((meal) => (
            <MealItem meal={meal} key={meal.id} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
