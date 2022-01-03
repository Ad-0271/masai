export const DisplaySingleItem = ({ item }) => {
  return (
    <>
      <div>Name: {item.title}</div>
      <div>Ingredients: {item.ingredients}</div>
      <div>Time Required: {item.time_required}</div>
      <div>Instructions: {item.instructions}</div>
      <div>
        Image:
        <img src={item.image_url} alt="" width="100px" />
      </div>
    </>
  );
};
