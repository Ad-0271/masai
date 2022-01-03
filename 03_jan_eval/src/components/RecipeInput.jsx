import { useState } from "react";

const initState = {
  title: "",
  ingredients: "",
  time_required: "",
  instructions: "",
  image_url: "",
};

export const RecipeInput = ({ getData }) => {
  const [formData, setFormData] = useState(initState);

  const [recipeImage, setImage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getImg = async (e) => {
    e.preventDefault();
    let res = await fetch(`https://foodish-api.herokuapp.com/api/`);

    let data = await res.json();

    formData.image_url = data.image;

    setImage(data.image);
  };

  const sendData = async (e) => {
    e.preventDefault();
    console.log(formData);

    let res = await fetch("http://localhost:3200/recipes", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    });

    let data = await res.json();
    console.log(data);
    setImage("");
    setFormData(initState);
    getData();
  };
  return (
    <>
      <form onSubmit={sendData}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <input
            type="textarea"
            value={formData.ingredients}
            name="ingredients"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Time required:</label>
          <input
            type="text"
            value={formData.time_required}
            name="time_required"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Instructions:</label>
          <input
            type="textarea"
            value={formData.instructions}
            name="instructions"
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={getImg}>Upload Image</button>
          {recipeImage}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
