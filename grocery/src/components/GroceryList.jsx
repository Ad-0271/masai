export const GroceryList = ({ title, removeData, id }) => {
  return (
    <>
      <div>
        {title}
        <button onClick={() => removeData(id)}>Remove</button>
      </div>
    </>
  );
};
