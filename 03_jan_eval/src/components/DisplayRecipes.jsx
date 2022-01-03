import { useEffect } from "react";
import { Recipe } from "./Recipe";
// import { RecipeInput } from "./RecipeInput";

export const DisplayRecipes = ({ getData, recipes, getSingleItem }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        hieght: "300px",
        width: "300px",
        border: "1px solid black",
        overflow: "scroll",
      }}
    >
      {recipes.map((el, i) => {
        return (
          <div onClick={() => getSingleItem(el.id)} key={i}>
            <Recipe {...el} />
          </div>
        );
      })}
    </div>
  );
};
