import { useState } from "react";

export const GroceryInput = ({ sendData }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
    sendData(text);
  };
  return (
    <>
      <div>
        <input
          value={text}
          placeholder="Add grocery"
          type="text"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};
