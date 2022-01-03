import { RecipeInput } from "./RecipeInput";
import { DisplayRecipes } from "./DisplayRecipes";
import { DisplaySingleItem } from "./DisplaySingleItem";
import { useState } from "react";

export const FoodRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const [singleItem, setSingleItem] = useState({});

  const getData = async () => {
    let res = await fetch("http://localhost:3200/recipes");
    let data = await res.json();
    setRecipes(data);
  };

  const getSingleItem = async (id) => {
    let res = await fetch(`http://localhost:3200/recipes/${id}`);
    let data = await res.json();
    setSingleItem(data);
  };

  if (Object.keys(singleItem).length) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            margin: "auto",
          }}
        >
          <RecipeInput getData={getData} />
          <DisplayRecipes
            getData={getData}
            recipes={recipes}
            getSingleItem={getSingleItem}
          />
        </div>
        <DisplaySingleItem item={singleItem} />
      </>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "600px",
          margin: "auto",
        }}
      >
        <RecipeInput getData={getData} />
        <DisplayRecipes
          getData={getData}
          recipes={recipes}
          getSingleItem={getSingleItem}
        />
      </div>
    </>
  );
};
